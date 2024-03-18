const { verificarUsuarioLogado } = require('../middlewares/loginAuth');

const express = require('express');
const router = express.Router();

router.use('/', verificarUsuarioLogado);

router.get('/user', (_req, res) => {
  res.status(200).render('cadastroUser');
});

router.get('/livro', (_req, res) => {
  res.status(200).render('cadastroLivros');
});

module.exports = router;