const form = document.querySelector('form');
const templateContainer = document.querySelector('.template-container');
const alertContainer = document.querySelector('.alert-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const login = {
    username: username.value,
    password: password.value
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(login),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch('/login', options)
    .then(res => res.json())
    .catch(err => err.message = "")
    .then(res => {
      if (res?.messageError) {
        if (alertContainer.children.length < 3) {
          const newAlert = templateContainer.querySelector('.alert-danger').cloneNode(true);
          newAlert.querySelector('.alert-message').innerText = res.messageError;
          alertContainer.appendChild(newAlert);
        }
        password.value = "";
        username_email.focus();
      }
      else {
        window.location.replace('/homepage');
      }
    });
});