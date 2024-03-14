const form = document.querySelector('form');

const radioPesquisa = document.querySelectorAll('input[name=pesquisa]');

radioPesquisa.forEach(radioBtn => {
  radioBtn.addEventListener('change', () => {
    if (radioPesquisa[0].checked) {
      document.getElementById(radioPesquisa[0].value).disabled = false;
      document.getElementById(radioPesquisa[1].value).disabled = true;
    }
    else {
      document.getElementById(radioPesquisa[0].value).disabled = true;
      document.getElementById(radioPesquisa[1].value).disabled = false;
    }
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const tipoPesquisa = document.querySelector('input[name=pesquisa]:checked');

  if (tipoPesquisa.value === 'titulo') {
    window.location.assign(`/buscar?titulo=${titulo.value}`);
  }
  else if (tipoPesquisa.value === 'ano') {
    window.location.assign(`/buscar/${ano.value}`);
  }
});