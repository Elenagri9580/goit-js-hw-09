'use strict';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');

form.addEventListener('input', onInputTextarea);
form.addEventListener('submit', handleSubmit);

function onInputTextarea() {
  const text = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(text));
}

function saveInputTextarea() {
  const saveText = localStorage.getItem('feedback-form-state');
  if (saveText) {
    const parsedText = JSON.parse(saveText);
    email.value = parsedText.email;
    message.value = parsedText.message;
  }
}
saveInputTextarea();

function handleSubmit(event) {
  event.preventDefault();
  if (email.value.trim() == '' || message.value.trim() == '') {
    return;
  }
  if (email.value.trim() !== '' && message.value.trim() !== '') {
    const info = {
      email: email.value.trim(),
      message: message.value.trim(),
    };
    console.log(info);
  }
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
