const LivroModel = require('../models/livrosModel');

const pesquisarTitulo = async (req, res) => {
  let titulo = req.query?.titulo || '';

  const livrosPesquisados = (await LivroModel.getAll()).filter(livro => {
    const tituloLivro = livro.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
    titulo = titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
    return tituloLivro.includes(titulo);
  });

  return res.status(200).render('pesquisarLivros', { livros: livrosPesquisados });
};

const pesquisarAno = async (req, res) => {
  const { ano } = req.params;
  const livrosPesquisados = (await LivroModel.getAll()).filter(livro => livro.ano == ano);
  return res.status(200).render('pesquisarLivros', { livros: livrosPesquisados });
};

const cadastrarLivro = async ({ body }, res) => {
  const novoLivro = new LivroModel(body.titulo, body.autor, body.ano);
  await novoLivro.cadastrarLivro();
  return res.status(200).json({ messageSuccess: `O livro ${body.titulo} foi cadastrado com sucesso!` });
};

const removerLivro = async(req, res) => {
  await LivroModel.removerLivro(Number(req.params.idLivro));
  return res.status(204).json();
};

const atualizarLivro = async (req, res) => {
  await LivroModel.atualizarLivro(req.body);
  return res.status(204).json();
};

module.exports = {
  removerLivro,
  cadastrarLivro,
  atualizarLivro,
  pesquisarTitulo,
  pesquisarAno
};