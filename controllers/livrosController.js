const LivroModel = require('../models/livrosModel');

const getAll = () => {
  return [...LivroModel.getAll()];
}

const pesquisarTitulo = (req, res) => {
  let titulo = req.query?.titulo || '';

  const livrosPesquisados = Livro.getAll().filter(livro => {
    const tituloLivro = livro.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
    titulo = titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
    return tituloLivro.includes(titulo);
  });

  return res.status(200).render('pesquisarLivros', { livros: livrosPesquisados });
};

const pesquisarAno = (req, res) => {
  const { ano } = req.params;
  const livrosPesquisados = Livro.getAll().filter(livro => livro.ano == ano);
   return res.status(200).render('pesquisarLivros', { livros: livrosPesquisados });
};

const cadastrarLivro = ({ body }, res) => {
  const livro = new LivroModel(body.titulo, body.autor, body.ano);
  LivroModel.cadastrarLivro(livro);
  return res.status(200).json({ messageSuccess: `O livro ${body.titulo} foi cadastrado com sucesso!` });
};

const removerLivro = (req, res) => {
  LivroModel.removerLivro(Number(req.params.idLivro));
  return res.status(204).json();
};

const atualizarLivro = (req, res) => {
  LivroModel.atualizarLivro(req.body);
  return res.status(204).json();
};

module.exports = {
  getAll,
  removerLivro,
  cadastrarLivro,
  atualizarLivro,
  pesquisarTitulo,
  pesquisarAno
};