const LivroModel = require('../models/livrosModel');

const cadastrarLivro = ({ body }, res) => {
  const livro = new LivroModel(body.titulo, body.autor, body.ano);
  LivroModel.cadastrarLivro(livro);
  return res.status(200).json({ messageSuccess: `O livro ${body.titulo} foi cadastrado com sucesso!` });
}

const removerLivro = (req, res) => {
  LivroModel.removerLivro(Number(req.params.idLivro));
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