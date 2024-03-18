const express = require('express');
const router = express.Router();
const Livro = require('../models/livrosModel');

const { verificarUsuarioLogado } = require('../middlewares/loginAuth');

router.use('/', verificarUsuarioLogado);

router.get('/', (_req, res) => {
  res.render('pesquisarLivros', { livros: Livro.getAll() });
});

router.get('/buscar', (req, res) => {
  let titulo = req.query?.titulo || '';

  const livrosPesquisados = Livro.getAll().filter(livro => {
    const tituloLivro = livro.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
    titulo = titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
    return tituloLivro.includes(titulo);
  });

  res.render('pesquisarLivros', { livros: livrosPesquisados });
});

router.get('/buscar/:ano', (req, res) => {
  const { ano } = req.params;
  const livrosPesquisados = Livro.getAll().filter(livro => livro.ano == ano.trim());
  res.render('pesquisarLivros', { livros: livrosPesquisados });
});

module.exports = router;