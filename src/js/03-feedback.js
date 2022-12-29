const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.input.addEventListener('input', formInput);
refs.textarea.addEventListener('input', formTextarea);
// refs.form.addEventListener('input', onFormStorage);
refs.form.addEventListener('submit', onFormSubmit);

checkSavedValues();

function formInput(event) {
  const input = event.target.value;

  if (input) {
    formData[event.target.name] = input;
  }
}

function formTextarea(event) {
  const textarea = event.target.value;

  if (textarea) {
    formData[event.target.name] = textarea;
  }
}

// function onFormStorage(event) {
//   const formDataJSON = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, formDataJSON);

//   formData[event.target.name] = event.target.value;
//   const formDataJSON = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, formDataJSON);
//   console.log(event.target.value);
// }

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function checkSavedValues() {
  const savedValues = localStorage.getItem(STORAGE_KEY);

  if (savedValues) {
    refs.input.value = JSON.parse(savedValues).email;
    refs.textarea.value = JSON.parse(savedValues).message;
  }
}
