require('dotenv').config({ path: './.env.database' });
const mysql = require('mysql2/promise');

const conectarAoBCDD = () => {
  try {
    const connection = mysql.createPool({
      host: process.env.BCDD_HOST,
      user: process.env.BCDD_USER,
      password: process.env.BCDD_PASSWORD,
      database: process.env.BCDD_DATABASE
    });

    console.log('\nConexão bem-sucedida ao banco de dados');
    return connection;
  }
  catch (err) {
    console.error('\nErro ao conectar ao banco de dados:', err);
    throw err;
  }
}

module.exports = conectarAoBCDD();


/**********************************
 * (async () => {
 *   try {
 *     const connection = await mysql.createConnection({
 *       host: process.env.BCDD_HOST,
 *       user: process.env.BCDD_USER,
 *       password: process.env.BCDD_PASSWORD,
 *       database: process.env.BCDD_DATABASE
 *     });

 *     await connection.connect();

 *     console.log('Conexão bem-sucedida ao banco de dados');
 *     module.exports = connection;
 *   } catch (error) {
 *     console.error('Erro ao conectar ao banco de dados:', error);
 *   }
 * })();
 */

/**********************************
 * const mysql = require('mysql2');
 *
 * const connection = mysql.createConnection({
 *   host: process.env.BCDD_HOST,
 *   user: process.env.BCDD_USER,
 *   password: process.env.BCDD_PASSWORD,
 *   database: process.env.BCDD_DATABASE
 * });

 * connection.connect(err => {
 *   if (err) {
 *     return console.error('Erro ao conectar ao banco de dados: ' + err);
 *   }
 *   console.log('Conexão bem-sucedida ao banco de dados');
 * });

 * module.exports = connection;
 */