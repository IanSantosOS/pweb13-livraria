const form = document.querySelector('#form-pesquisa');

const checkboxPesquisa = document.querySelectorAll('input[name=pesquisa]');

checkboxPesquisa.forEach(checkboxBtn => {
  checkboxBtn.addEventListener('click', () => {
    if (checkboxBtn.value === 'titulo') {
      if (!checkboxBtn.checked) return titulo.disabled = true;
      checkboxPesquisa[1].checked = false;
      titulo.disabled = false;
      ano.disabled = true;
    }
    else if (checkboxBtn.value === 'ano') {
      if (!checkboxBtn.checked) return ano.disabled = true;
      checkboxPesquisa[0].checked = false;
      titulo.disabled = true;
      ano.disabled = false;
    }
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const tipoPesquisa = document.querySelector('input[name=pesquisa]:checked');

  if (tipoPesquisa.value === 'titulo') {
    window.location.assign(`/livraria/buscar?titulo=${titulo.value}`);
  }
  else if (tipoPesquisa.value === 'ano') {
    window.location.assign(`/livraria/buscar/${ano.value}`);
  }
});

function atualizarLivro(id) {
}

function removerLivro(id) {
}