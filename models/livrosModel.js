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

  static atualizarLivro(mudanca) {
    const livro = Livro._lista.find(livro => livro.id = mudanca.id);

    if (!livro) return;

    for (const prop in mudanca) {
      if (prop === 'id') continue;
      livro[prop] = mudanca[prop];
    }
  }
}

const books = require('../utils/books.json');

books.forEach(book => {
  const novoLivro = new Livro(book.titulo, book.autor, book.ano);
  Livro.cadastrarLivro(novoLivro);
});

module.exports = Livro;