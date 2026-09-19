# app.py
from flask import Flask, request, jsonify, render_template
import joblib
import pandas as pd
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__)

@app.after_request
def disable_browser_cache(response):
    if request.path == '/' or request.path.startswith('/static/'):
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
        response.headers['Pragma'] = 'no-cache'
    return response

# Load saved model and encoders

try:
    model = joblib.load(os.path.join(BASE_DIR, 'house_price_model.joblib'))
    label_encoders = joblib.load(os.path.join(BASE_DIR, 'label_encoders.joblib'))
    features = joblib.load(os.path.join(BASE_DIR, 'features.joblib'))
    encoder_options = {
        column: list(encoder.classes_)
        for column, encoder in label_encoders.items()
        if column in features
    }
    print("Model and encoders loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None
    label_encoders = {}
    features = []
    encoder_options = {}

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html', options=encoder_options)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'API is running'})

@app.route('/predict', methods=['POST'])
@app.route('/predict/', methods=['POST'])
def predict_price():
    try:
        data = request.get_json()
        if not data:
            raise ValueError('Prediction details are required.')

        missing_fields = [field for field in features if field not in data]
        if missing_fields:
            raise ValueError(f"Missing fields: {', '.join(missing_fields)}")

        input_data = pd.DataFrame([{field: data[field] for field in features}])
        for column, encoder in label_encoders.items():
            if column in input_data.columns:
                value = input_data.at[0, column]
                if value not in encoder.classes_:
                    raise ValueError(f"Unknown {column}: {value}")
                input_data[column] = encoder.transform(input_data[column])

        predicted_price = model.predict(input_data)[0]

        return jsonify({
            'predicted_price': float(predicted_price),
            'input_received': data,
            'status': 'success'
        })

    except Exception as e:
        return jsonify({
            'error': str(e),
            'status': 'error'
        }), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
