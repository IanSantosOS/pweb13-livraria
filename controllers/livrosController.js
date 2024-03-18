const LivroModel = require('../models/livrosModel');

const cadastrarLivro = (req, res) => {
  LivroModel.cadastrarLivro(req.body);
  return res.status(204).json();
}

const removerLivro = (req, res) => {
  LivroModel.removerLivro(req.params.idLivro);
  return res.status(204).json();
}

const atualizarLivro = (req, res) => {
  LivroModel.atualizarLivro(req.body);
  return res.status(204).json();
}

module.exports = {
  removerLivro,
  cadastrarLivro,
  atualizarLivro
}