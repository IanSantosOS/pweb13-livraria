const form = document.querySelector('#form-pesquisa');
const checkboxPesquisa = document.querySelectorAll('input[name=pesquisa]');

const formAtualizarLivro = document.querySelector('#form-atualizar-livro');
const btnAtualizarLivro = document.querySelector('#atualizar-livro-form-btn');

formAtualizarLivro.addEventListener('submit', (event) => {
  event.preventDefault();
  atualizarLivro();
});

btnAtualizarLivro.addEventListener('click', () => {
  atualizarLivro();
});

checkboxPesquisa.forEach(checkboxBtn => {
  checkboxBtn.addEventListener('click', () => {
    if (checkboxBtn.value === 'titulo') {
      if (!checkboxBtn.checked) return tituloPesquisa.disabled = true;
      checkboxPesquisa[1].checked = false;
      tituloPesquisa.disabled = false;
      anoPesquisa.disabled = true;
    }
    else if (checkboxBtn.value === 'ano') {
      if (!checkboxBtn.checked) return anoPesquisa.disabled = true;
      checkboxPesquisa[0].checked = false;
      tituloPesquisa.disabled = true;
      anoPesquisa.disabled = false;
    }
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const tipoPesquisa = document.querySelector('input[name=pesquisa]:checked');

  if (tipoPesquisa.value === 'titulo') {
    window.location.assign(`/livraria/buscar?titulo=${tituloPesquisa.value}`);
  }
  else if (tipoPesquisa.value === 'ano') {
    window.location.assign(`/livraria/buscar/${anoPesquisa.value}`);
  }
});

function atualizarLivro() {
  const atualizar = { id: parseInt(id.value) };

  if (titulo.value.trim()) atualizar.titulo = titulo.value.trim();
  if (autor.value.trim()) atualizar.autor = autor.value.trim();
  if (!isNaN(ano.value)) atualizar.ano = ano.value;

  const options = {
    method: 'POST',
    body: JSON.stringify(atualizar),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch('/livraria/atualizar', options)
    .then(res => window.location.reload());
}

function removerLivro(idLivro) {
  fetch(`/livraria/remover/${idLivro}`, { method: 'DELETE'})
    .then(res => window.location.reload());
}

function enviarModal(idLivro, tituloLivro, autorLivro, anoLivro) {
  id.value = idLivro;
  titulo.value = tituloLivro;
  autor.value = autorLivro;
  ano.value = anoLivro;
}