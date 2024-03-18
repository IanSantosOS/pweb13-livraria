class Livro {
  constructor(titulo, autor, ano) {
    this.id = Livro._countId++;
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  static _countId = 0;
  static _lista = [];

  static getAll() {
    return Livro._lista;
  }

  static cadastrarLivro(livro) {
    Livro._lista.push(livro);
  }

  static removerLivro(id) {
    Livro._lista.splice(id, 1);
  }

  static atualizarLivro(livroAtualizado) {
    const livro = Livro._lista.find(livro => livro.id === livroAtualizado.id);

    if (!livro) return;

    if (livroAtualizado?.titulo) {
      livro.titulo = livroAtualizado.titulo;
    }
    if (livroAtualizado?.autor) {
      livro.autor = livroAtualizado.autor;
    }
    if (livroAtualizado?.ano) {
      livro.ano = livroAtualizado.ano;
    }
  }
}

const books = require('../utils/books.json');

books.forEach(book => {
  const novoLivro = new Livro(book.titulo, book.autor, book.ano);
  Livro.cadastrarLivro(novoLivro);
});

module.exports = Livro;