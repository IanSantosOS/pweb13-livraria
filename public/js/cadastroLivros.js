const form = document.querySelector('#form-cadastro-livro');
const templateContainer = document.querySelector('.template-container');
const alertContainer = document.querySelector('.alert-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const livro = {
    titulo: titulo.value,
    autor: autor.value,
    ano: ano.value
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(livro),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch('/cadastro/livro', options)
    .then(res => res.json())
    .catch(err => err.message = "")
    .then(res => {
      if (alertContainer.children.length < 3) {
        const newAlertSuccess = templateContainer.querySelector('.alert-success').cloneNode(true);
        newAlertSuccess.querySelector('.alert-message').innerText = res.messageSuccess;
        alertContainer.appendChild(newAlertSuccess);
      }
    });

    titulo.value = "";
    autor.value = "";
    ano.value = "";
});