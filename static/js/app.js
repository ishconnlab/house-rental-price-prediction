const form = document.querySelector('#prediction-form');
const errorMessage = document.querySelector('#form-error');
const emptyResult = document.querySelector('#result-empty');
const readyResult = document.querySelector('#result-ready');
const priceValue = document.querySelector('#price-value');
const resetButton = document.querySelector('#reset-button');
const submitButton = form.querySelector('button[type="submit"]');
const apiBaseUrl = document.querySelector('.shell').dataset.apiBaseUrl || window.location.origin;

const setDetail = (id, value) => {
  document.querySelector(`#${id}`).textContent = value;
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  errorMessage.textContent = '';
  submitButton.disabled = true;
  submitButton.querySelector('span:first-child').textContent = 'Calculating...';

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  ['BHK', 'Size', 'Current Floor', 'Total Floors', 'Bathroom'].forEach((field) => {
    payload[field] = Number(payload[field]);
  });

  try {
    const response = await fetch(`${apiBaseUrl}/predict`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.status !== 'success') throw new Error(result.error || 'Could not calculate an estimate.');
    priceValue.textContent = Math.round(result.predicted_price).toLocaleString('en-IN');
    setDetail('detail-city', payload.City);
    setDetail('detail-size', `${payload.Size.toLocaleString('en-IN')} sq ft`);
    setDetail('detail-layout', `${payload.BHK} BHK · ${payload.Bathroom} bath`);
    setDetail('detail-floor', `${payload['Current Floor']} of ${payload['Total Floors']}`);
    setDetail('detail-area', payload['Area Type']);
    setDetail('detail-furnishing', payload['Furnishing Status']);
    emptyResult.hidden = true;
    readyResult.hidden = false;
  } catch (error) {
    errorMessage.textContent = error instanceof TypeError
      ? 'The prediction server is unreachable. Start Flask with: python app.py'
      : error.message;
  } finally {
    submitButton.disabled = false;
    submitButton.querySelector('span:first-child').textContent = 'Estimate monthly rent';
  }
});

resetButton.addEventListener('click', () => {
  readyResult.hidden = true;
  emptyResult.hidden = false;
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
