const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: '',
});

connection.connect(err => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados: ' + err);
  }
  console.log('Conexão bem-sucedida ao banco de dados');
});

module.exports = connection;