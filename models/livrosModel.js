const db = require('./dbConnection');

class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  async cadastrarLivro() {
    return await db.execute('INSERT INTO livros (titulo, autor, ano) VALUES (?, ?, ?)', [this.titulo, this.autor, this.ano]);
  }

  static async getAll() {
    const [ rows ] = await db.execute('SELECT * FROM livros');
    return rows;
  }

  static async removerLivro(id) {
    return await db.execute('DELETE FROM livros WHERE id = ?', [id]);
  }

  static async atualizarLivro(atualizacao) {
    if (atualizacao?.titulo) {
      await db.execute('UPDATE livros SET titulo = ? WHERE id = ?', [atualizacao.titulo, atualizacao.id]);
    }
    if (atualizacao?.autor) {
      await db.execute('UPDATE livros SET autor = ? WHERE id = ?', [atualizacao.autor, atualizacao.id]);
    }
    if (atualizacao?.ano) {
      await db.execute('UPDATE livros SET ano = ? WHERE id = ?', [atualizacao.ano, atualizacao.id]);
    }
  }
}

module.exports = Livro;