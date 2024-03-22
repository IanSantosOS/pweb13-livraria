const db = require('./dbConnection');

class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  cadastrarLivro() {
    return db.execute('INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)', [this.titulo, this.autor, this.ano]);
  }

  static getAll() {
    return db.execute('SELECT * FROM livros');
  }

  static removerLivro(id) {
    db.execute('DELETE FROM livros WHERE id = ?', [id]);
  }

  static atualizarLivro(atualizacao) {
    if (atualizacao?.titulo) {
      db.execute('UPDATE usuarios SET titulo = ? WHERE id = ?', [atualizacao.titulo, atualizacao.id]);
    }
    if (atualizacao?.autor) {
      db.execute('UPDATE usuarios SET autor = ? WHERE id = ?', [atualizacao.autor, atualizacao.id]);
    }
    if (atualizacao?.ano) {
      db.execute('UPDATE usuarios SET ano = ? WHERE id = ?', [atualizacao.ano, atualizacao.id]);
    }
  }
}

module.exports = Livro;