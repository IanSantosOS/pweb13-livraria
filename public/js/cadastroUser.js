const form = document.querySelector('#form-cadastro-user');
const templateContainer = document.querySelector('.template-container');
const alertContainer = document.querySelector('.alert-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const cadastro = {
    username: username.value,
    password: password.value,
    password_confirm: password_confirm.value
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(cadastro),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch('/cadastro/user', options)
    .then(res => res.json())
    .catch(err => err.message = "")
    .then(res => {
      if (res?.messageError) {
        alertContainer.innerHTML = "";
        for (const msg in res.messageError) {
          const newAlertError = templateContainer.querySelector('.alert-danger').cloneNode(true);
          newAlertError.querySelector('.alert-message').innerText = res.messageError[msg];
          alertContainer.appendChild(newAlertError);
        }
      }
      else {
        const newAlert = templateContainer.querySelector('.alert-success').cloneNode(true);
        newAlert.querySelector('.alert-message').innerText = res.messageSuccess;
        alertContainer.appendChild(newAlert);
      }
    });
});