import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('input', throttle(onInputHandler, 500));
refs.form.addEventListener('submit', onFormSubmit);
checkStorage();

function onInputHandler(event) {
  const { target } = event;
  formData[target.name] = target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function checkStorage() {
  const storage = localStorage.getItem(STORAGE_KEY);

  if (!storage) {
    return;
  }

  const { email, message } = JSON.parse(storage);
  refs.input.value = email;
  refs.textarea.value = message;
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
