'use strict';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input');
const message = form.querySelector('textarea');

form.addEventListener('input', onInputTextarea);
form.addEventListener('submit', handleSubmit);

function onInputTextarea() {
  //  const textEmail = email.value.trim();
  //  const textMessage = message.value.trim();
  // localStorage.setItem("feedback-form-input", textEmail);
  // localStorage.setItem("feedback-form-textarea", textMessage);
  const text = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(text));
}

function saveInputTextArea() {
  //const saveTextEmail = localStorage.getItem("feedback-form-input");
  //const saveTextMessage = localStorage.getItem("feedback-form-textarea");
  // if (saveTextEmail || saveTextMessage) {
  //     email.value = saveTextEmail;
  //     message.value = saveTextMessage;
  // }
  const saveText = localStorage.getItem('feedback-form-state');
  if (saveText) {
    const parsedText = JSON.parse(saveText);
    email.value = parsedText.email;
    message.value = parsedText.message;
  }
}
saveInputTextArea();

function handleSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  // localStorage.removeItem("feedback-form-input");
  // localStorage.removeItem("feedback-form-textarea");
}
