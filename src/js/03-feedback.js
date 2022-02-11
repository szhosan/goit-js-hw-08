const _ = require('lodash');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', _.throttle(onFormInput));
formRef.addEventListener('submit', onFormSubmit);

checkLocalStorage();

function onFormInput(e) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(createFieldStatusObject()));
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(createFieldStatusObject());
  formRef.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function createFieldStatusObject() {
  return {
    email: formRef.elements.email.value,
    message: formRef.elements.message.value,
  };
}

function checkLocalStorage() {
  let currentFieldStatus;
  try {
    currentFieldStatus = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    formRef.elements.email.value = currentFieldStatus.email;
    formRef.elements.message.value = currentFieldStatus.message;
  } catch (error) {
    
  }
}
