const express = require('express');
const router = express.Router();

const { verificarUsuarioLogado } = require('../middlewares/loginAuth');
const livrosController = require('../controllers/livrosController');

router.use('/', verificarUsuarioLogado);

router.get('/', (_req, res) => {
  res.render('pesquisarLivros', { livros: livrosController.getAll() });
});

router.get('/buscar/:ano', livrosController.pesquisarAno);

router.get('/buscar', livrosController.pesquisarTitulo);

router.delete('/remover/:idLivro', livrosController.removerLivro);

router.put('/atualizar', livrosController.atualizarLivro);

module.exports = router;