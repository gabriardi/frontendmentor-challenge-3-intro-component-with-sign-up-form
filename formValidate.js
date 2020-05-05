const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.getElementById('btn-secondary').addEventListener('click', () => {
  document.getElementById('firstName').focus();
});

let isFormValid = true;

const setError = (element) => {
  element.classList.add('cta__form__input--error');
  element.nextSibling.nextSibling.classList.add('show-error');
  element.parentElement.nextSibling.nextSibling.classList.add('show-error');
  isFormValid = false;
};

const clearErrors = () => {
  isFormValid = true;
  document.querySelectorAll('.show-error').forEach((element) => {
    element.classList.remove('show-error');
  });
  document.querySelectorAll('.cta__form__input--error').forEach((element) => {
    element.classList.remove('cta__form__input--error');
  });
};

const validateForm = (event) => {
  clearErrors();
  const firstNameField = document.getElementById('firstName');
  const lastNameField = document.getElementById('lastName');
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');

  if (!firstNameField.value) setError(firstNameField);
  if (!lastNameField.value) setError(lastNameField);
  if (!emailField.value || !emailField.value.match(EMAIL_PATTERN))
    setError(emailField);
  if (!passwordField.value) setError(passwordField);

  if (!isFormValid) {
    document.querySelector('.cta__form__input--error').focus();
    event.preventDefault();
  }
};

const form = document.getElementById('form');
form.addEventListener('submit', validateForm);
