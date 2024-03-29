const session = require('express-session');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views/pages');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'livraria-joao-e-cia',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use('/', require('./routes/homepageRoute'));
app.use('/login', require('./routes/loginRoute'));
app.use('/logout', require('./routes/logoutRoute'));
app.use('/livraria', require('./routes/livrariaRoute'));
app.use('/cadastro', require('./routes/cadastroRoute'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n\x1b[43;1m Funcionou!!! \x1b[0m Servidor está rodando na porta: ${PORT}\x1b[0m\n`);
});