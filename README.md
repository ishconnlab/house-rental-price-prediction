# 🏠 House Price Prediction API

## Overview
This project is a machine learning-powered REST API developed for ABZ Company, a leading real estate software firm in Kigali, Rwanda. The API predicts house rental prices based on various features such as size, location, and amenities, helping ensure fair and accurate property pricing in the market.

## 🌟 Key Features



## House Rental Price Prediction

## Ishconnect Machine Learning Training | Final Project

This repository contains the final practical project from the **Ishconnect Machine Learning Training**. It demonstrates how to move from a real-world rental dataset to a working machine learning application with a browser interface and REST API.

The application predicts an estimated monthly house rent from property details such as location, size, bedrooms, floors, area type, furnishing status, and bathrooms.

**Training organization:** Ishconnect
**Website:** [www.ishconnect.rw](https://www.ishconnect.rw)
**Contact:** 0787377750
**Training year:** 2026
**Training duration:** 4 days
**Location and timezone:** Kigali, Rwanda (CAT / UTC+2)
**Session time:** 2:30 PM - 4:30 PM
**Session duration:** 2 hours per session

---

## Welcome to the Machine Learning Training

🎉 Welcome to everyone who successfully registered for the Ishconnect Machine Learning Training. This intensive, practical program introduces machine learning fundamentals and leads to the development and deployment of a complete Python project.

The training focuses on learning by building:

```text
Dataset -> Data Cleaning -> Visualization -> Model Training
-> Trained Model -> Application -> Deployment
```

The goal is not only to understand machine learning theory, but also to finish with a working real-world machine learning project.

---

## Four-Day Course Schedule

### Day 1 - 17 September 2026
#### Introduction to Machine Learning and Python Foundations

**Time:** 2:30 PM - 4:30 PM, Kigali time

Topics covered:

- Welcome and introduction to the training
- What machine learning is
- Types of machine learning
- How machine learning works in real-world applications
- Introduction to Python for machine learning
- Essential Python concepts and libraries
- Setting up the machine learning development environment
- Practical examples

### Day 2 - 18 September 2026
#### Data Preparation, Visualization, and Machine Learning Models

**Time:** 2:30 PM - 4:30 PM, Kigali time

Topics covered:

- Understanding datasets
- Data collection and exploration
- Python machine learning libraries
- Data cleaning and preprocessing
- Handling missing and incorrect data
- Data visualization
- Understanding features and target variables
- Splitting datasets
- Introduction to model training
- Training and evaluating machine learning models

### Day 3 - 19 September 2026
#### Machine Learning Practice

Topics covered:

- Advanced data preparation
- Feature selection and engineering
- Model training
- Model evaluation
- Improving model performance
- Comparing different machine learning models
- Saving a trained model
- Practical machine learning exercises

### Day 4 - 20 September 2026
#### Build and Deploy a Complete Real-World ML Project

This is the final practical project day. All concepts from the training are combined to build a complete rental price prediction application using Python.

By the end of the project, learners can:

- Select and prepare a real-world dataset
- Clean and visualize data
- Identify features and a target variable
- Train and evaluate a machine learning model
- Save a trained model with Joblib
- Build a Flask application around the model
- Create an HTML, CSS, and JavaScript user interface
- Expose a prediction REST API
- Prepare the project for deployment
- Deploy a trained machine learning model

---

## Final Project Overview
<img width="1283" height="669" alt="image" src="https://github.com/user-attachments/assets/52c04901-13f3-4c1d-a4ba-1f4f30392f8a" />
<img width="1341" height="677" alt="image" src="https://github.com/user-attachments/assets/0457dcb6-ed50-4003-9031-03c302668819" />




### Problem

Rental prices can vary according to property size, location, floor information, furnishing, and amenities. This project uses historical rental data to estimate a property's monthly rent from those characteristics.

### Solution

The project uses a trained **Random Forest Regressor**. Users enter property details in the web form, the Flask backend encodes categorical values, sends the prepared features to the model, and returns an estimated monthly rent in Rwandan francs (`FRw`).

### Input Features

The trained model uses the following eight features:

| Feature | Description | Example |
| --- | --- | --- |
| `BHK` | Bedrooms, hall, and kitchen count | `2` |
| `Size` | Property size in square feet | `1000` |
| `Current Floor` | Floor where the property is located | `2` |
| `Total Floors` | Total floors in the building | `4` |
| `Area Type` | Property area classification | `Super Area` |
| `City` | Property city | `Mumbai` |
| `Furnishing Status` | Furnishing level | `Furnished` |
| `Bathroom` | Bathroom count | `2` |

### Model Assets

- `house_price_model.joblib`: trained Random Forest regression model
- `label_encoders.joblib`: saved encoders for categorical features
- `features.joblib`: feature order used during prediction

### Prediction Workflow

1. The user completes the property profile in the web interface.
2. The browser sends the values to `POST /predict`.
3. Flask validates the required fields.
4. Categorical fields are transformed using the saved label encoders.
5. The Random Forest model predicts the rent.
6. The browser displays the estimated monthly rent in `FRw`.

---

## Technology Stack

- **Language:** Python
- **Web framework:** Flask
- **Machine learning:** scikit-learn
- **Data processing:** Pandas and NumPy
- **Model persistence:** Joblib
- **Frontend:** HTML, CSS, and JavaScript
- **Production server:** Gunicorn
- **Deployment target:** Render-compatible Flask service

---

## Project Structure

```text
.
|-- app.py                    Flask routes and prediction logic
|-- templates/
|   `-- index.html             Browser interface
|-- static/
|   |-- css/
|   |   `-- style.css          Interface styling and responsive layout
|   `-- js/
|       `-- app.js             Form submission and result interactions
|-- House_Rent_Dataset.csv     Rental training dataset
|-- train_model.ipynb          Model training notebook
|-- house_price_model.joblib   Trained Random Forest model
|-- label_encoders.joblib      Saved categorical encoders
|-- features.joblib            Saved model feature order
|-- requirements.txt           Python dependencies
`-- README.md                  Project and training documentation
```

---

## Run the Project Locally

### Requirements

- Python 3.8 or newer
- pip
- A virtual environment is recommended

### Installation

```bash
git clone <repository-url>
cd house-price-prediction-model-main

python -m venv venv
```

Activate the environment on Windows:

```powershell
venv\Scripts\Activate.ps1
```

Activate the environment on macOS or Linux:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the application:

```bash
python app.py
```

Open the web interface at:

## 🚀 Quick Start
http://127.0.0.1:5000
```

---

## API Documentation

### Web interface

```http
GET /
```

Returns the rental prediction form.

### Health check

```http
GET /health
```

Example response:

```json
{
  "status": "API is running"
}
```

### Make a prediction

```http
POST /predict
Content-Type: application/json
```

Example request:

```json
{
  "BHK": 2,
  "Size": 1000,
  "Current Floor": 2,
  "Total Floors": 4,
  "Area Type": "Super Area",
  "City": "Mumbai",
  "Furnishing Status": "Furnished",
  "Bathroom": 2
}
```

Example response:

```json
{
  "predicted_price": 59740.0,
  "input_received": {
    "BHK": 2,
    "Size": 1000,
    "Current Floor": 2,
    "Total Floors": 4,
    "Area Type": "Super Area",
    "City": "Mumbai",
    "Furnishing Status": "Furnished",
    "Bathroom": 2
  },
  "status": "success"
}
```

The web interface formats the numeric prediction as a monthly rent estimate using the `FRw` currency prefix.

---

## Training the Model

The training workflow is documented in `train_model.ipynb`. It covers dataset loading, exploration, preprocessing, encoding categorical values, model training, evaluation, and saving the model artifacts.

When retraining the model, keep these files synchronized:

- `house_price_model.joblib`
- `label_encoders.joblib`
- `features.joblib`

The Flask application depends on their saved feature order and encoder classes.

---

## Deployment

The application includes `vercel.json` and `api/index.py` for deployment as a Vercel Python serverless application. The trained model artifact is included in the repository so the live API can make predictions.

### Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Keep the project root as the **Root Directory**.
4. Vercel will detect `vercel.json` and install `requirements.txt`.
5. Deploy and open the generated URL.

The live endpoints are:

```text
https://house-rental-price-prediction-seven.vercel.app/
https://house-rental-price-prediction-seven.vercel.app/health
```

The application can also be deployed to a Flask-compatible service such as Render.

**Build command:**

```bash
pip install -r requirements.txt
```

**Start command:**

```bash
gunicorn app:app
```

The application reads the deployment port from the `PORT` environment variable and falls back to port `5000` locally.

---

## Error Handling

The API handles:

- Missing request data
- Missing required fields
- Unsupported categorical values
- Model prediction errors
- Invalid or incomplete property profiles

Errors are returned as JSON with an `error` message and an `error` status.

---

## Learning Outcomes

After completing this project, learners should be able to:

- Explain the basic machine learning workflow
- Work with tabular datasets using Pandas
- Prepare and transform data for model training
- Train a supervised regression model
- Evaluate and save a model
- Build a Flask API for machine learning inference
- Connect a frontend to a Python backend
- Organize a machine learning project for deployment

---

## Future Improvements

- Add automated model performance metrics to the application
- Add confidence ranges alongside estimates
- Add batch prediction support
- Add user authentication and prediction history
- Add more Rwanda-specific rental data
- Retrain with locally collected Kigali housing data
- Add automated tests and continuous deployment

---

## Ishconnect Training Contact

For information about the Machine Learning Training and future cohorts:

- **Website:** [www.ishconnect.rw](https://www.ishconnect.rw)
- **Phone:** 0787377750
- **Location:** Kigali, Rwanda
- **Timezone:** CAT / UTC+2

---

## Acknowledgement

This final project was created as part of the **Ishconnect Machine Learning Training, 2026**. Thank you to every learner who participated, practiced, asked questions, and built along the way.

🎉 Let us keep learning, coding, and building with Python and machine learning. 🤖🐍🚀

### Prerequisites
```bash
Python 3.8+
pip (Python package manager)
Virtual environment (recommended)
```

### Installation
```bash
# Clone repository
git clone https://github.com/codeWithEdison/house-price-prediction-model.git
cd house-price-prediction-model

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the API
python app.py
```

Open `http://127.0.0.1:5000` in a browser to use the rental estimate form. The same server continues to expose the JSON API described below.

## 📁 Project Structure

```text
app.py                    Flask routes and model prediction logic
templates/index.html      Browser UI markup
static/css/style.css      UI layout and visual styling
static/js/app.js          Form submission and result interactions
house_price_model.joblib  Trained Random Forest model
label_encoders.joblib     Saved categorical encoders
features.joblib           Model feature order
House_Rent_Dataset.csv    Training data
train_model.ipynb         Model training notebook
```

## 📡 API Endpoints

### Health Check
```http
GET /health
```

### Web Interface
```http
GET /
```

Serves the HTML/CSS/JavaScript rental estimate interface.

### Price Prediction
```http
POST /predict
```

#### Request Body Example
```json
{
    "BHK": 2,
    "Size": 1000,
    "Current Floor": 2,
    "Total Floors": 4,
    "Area Type": "Super Area",
    "City": "Mumbai",
    "Furnishing Status": "Furnished",
    "Bathroom": 2
}
```

#### Response Example
```json
{
    "predicted_price": 25000.00,
    "input_received": {...},
    "status": "success"
}
```

## 🔍 Model Training

Train your own model using:
```bash
python train_model.py
```

## 🚀 Deployment

### Deploy to Render
1. Fork this repository
2. Connect to Render
3. Configure build settings:
   ```
   Build Command: pip install -r requirements.txt
   Start Command: gunicorn app:app
   ```

## 📈 Performance Metrics
- Training Score: XX%
- Testing Score: XX%
- Average Response Time: <100ms

## 🛡️ Error Handling
The API includes comprehensive error handling for:
- Invalid input values
- Missing parameters
- Server errors
- Model prediction errors

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Future Improvements
- [ ] Add user authentication
- [ ] Implement caching
- [ ] Add more property features
- [ ] Improve model accuracy
- [ ] Add batch prediction support

## 👥 Authors
- Your Name - Initial work - [GitHub Profile]https://github.com/ishl250

## 📞 Support
For support:
- Open an issue
- Contact: (https://founder.ishconnect.rw/)

---
⭐ Star this repository if you find it helpful!

[View Demo](https://house-rental-price-prediction-seven.vercel.app/) | [Report Bug](https://house-rental-price-prediction-seven.vercel.app/) | [Request Feature](https://house-rental-price-prediction-seven.vercel.app/)

This project was created as part of the ABZ Company's initiative to improve property pricing accuracy in the Rwandan real estate market.
