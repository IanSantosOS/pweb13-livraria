const mysql = require('mysql2');

const connection =  mysql.createConnection({
  host: process.env.BCDD_HOST,
  user: process.env.BCDD_USER,
  password: process.env.BCDD_PASSWORD,
  database: process.env.BCDD_DATABASE
});

connection.connect(err => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados: ' + err);
  }
  console.log('Conexão bem-sucedida ao banco de dados');
});

module.exports = connection;