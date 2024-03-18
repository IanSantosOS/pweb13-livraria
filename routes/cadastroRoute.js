const express = require('express');
const router = express.Router();

const { verificarUsuarioLogado } = require('../middlewares/loginAuth');
const veirificarFormUser = require('../middlewares/cadastroUserAuth');

const { cadastrarUsuario } = require('../controllers/usersController');
const { cadastrarLivro } = require('../controllers/livrosController');

router.use('/', verificarUsuarioLogado);

router.get('/user', (_req, res) => {
  res.status(200).render('cadastroUser');
});

// router.post('/user', veirificarFormUser, cadastrarUsuario);

router.get('/livro', (_req, res) => {
  res.status(200).render('cadastroLivros');
});

router.post('/livro', cadastrarLivro);

module.exports = router;