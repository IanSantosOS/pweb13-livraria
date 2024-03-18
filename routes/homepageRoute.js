const express = require('express');
const router = express.Router();

const { verificarUsuarioLogado } = require('../middlewares/loginAuth');

// O middleware não pode ser utilizado nesse caminho "/" pois se não ele vai ser aplicado em todas as páginas
// posteriores incluindo a página de login, gerando então redirects infinitos
router.get('/', (req, res) => {
  if (req.session?.username) {
    res.redirect('/homepage');
  } else {
    res.redirect('/login');
  }
});

router.get('/homepage', verificarUsuarioLogado, (_req, res) => {
  res.render('homepage');
})

module.exports = router;