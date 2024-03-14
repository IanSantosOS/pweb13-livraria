const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let listaLivros = [
  { id: 0,  titulo: 'O Grande Gatsby',                                              autor: 'F. Scott Fitzgerald',      ano: '2013' },
  { id: 1,  titulo: 'O Senhor dos Anéis: A Sociedade do Anel',                      autor: 'J.R.R. Tolkien',           ano: '2001' },
  { id: 2,  titulo: 'Harry Potter e a Pedra Filosofal',                             autor: 'J.K. Rowling',             ano: '2001' },
  { id: 3,  titulo: 'O Código Da Vinci',                                            autor: 'Dan Brown',                ano: '2006' },
  { id: 4,  titulo: 'Orgulho e Preconceito',                                        autor: 'Jane Austen',              ano: '2005' },
  { id: 5,  titulo: 'A Menina que Roubava Livros',                                  autor: 'Markus Zusak',             ano: '2013' },
  { id: 6,  titulo: 'O Poderoso Chefão',                                            autor: 'Mario Puzo',               ano: '1972' },
  { id: 7,  titulo: 'O Exorcista',                                                  autor: 'William Peter Blatty',     ano: '1973' },
  { id: 8,  titulo: '1984',                                                         autor: 'George Orwell',            ano: '1984' },
  { id: 9,  titulo: 'Crepúsculo',                                                   autor: 'Stephenie Meyer',          ano: '2008' },
  { id: 10, titulo: 'A Culpa é das Estrelas',                                       autor: 'John Green',               ano: '2014' },
  { id: 11, titulo: 'A Garota no Trem',                                             autor: 'Paula Hawkins',            ano: '2016' },
  { id: 12, titulo: 'O Silêncio dos Inocentes',                                     autor: 'Thomas Harris',            ano: '1991' },
  { id: 13, titulo: 'A Guerra dos Tronos',                                          autor: 'George R.R. Martin',       ano: '2011' },
  { id: 14, titulo: 'A Revolução dos Bichos',                                       autor: 'George Orwell',            ano: '1954' },
  { id: 15, titulo: 'Os Miseráveis',                                                autor: 'Victor Hugo',              ano: '2012' },
  { id: 16, titulo: 'A Cabana',                                                     autor: 'William P. Young',         ano: '2017' },
  { id: 17, titulo: 'It: A Coisa',                                                  autor: 'Stephen King',             ano: '2017' },
  { id: 18, titulo: 'O Hobbit',                                                     autor: 'J.R.R. Tolkien',           ano: '2012' },
  { id: 19, titulo: 'Garota Exemplar',                                              autor: 'Gillian Flynn',            ano: '2014' },
  { id: 20, titulo: 'O Iluminado',                                                  autor: 'Stephen King',             ano: '1980' },
  { id: 21, titulo: 'O Leão, a Feiticeira e o Guarda-Roupa',                        autor: 'C.S. Lewis',               ano: '2005' },
  { id: 22, titulo: 'O Pequeno Príncipe',                                           autor: 'Antoine de Saint-Exupéry', ano: '2015' },
  { id: 23, titulo: 'As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa', autor: 'C.S. Lewis',               ano: '2005' },
  { id: 24, titulo: 'O Sol é para Todos',                                           autor: 'Harper Lee',               ano: '1962' },
  { id: 25, titulo: 'O Senhor das Moscas',                                          autor: 'William Golding',          ano: '2015' },
  { id: 26, titulo: 'Matilda',                                                      autor: 'Roald Dahl',               ano: '1985' },
  { id: 27, titulo: 'A Marca de uma Lágrima',                                       autor: 'Pedro Bandeira',           ano: '2002' },
  { id: 28, titulo: 'A Cor Púrpura',                                                autor: 'Alice Walker',             ano: '2024' },
  { id: 29, titulo: 'A Revolta de Atlas',                                           autor: 'Ayn Rand',                 ano: '2011' },
  { id: 30, titulo: 'O Conde de Monte Cristo',                                      autor: 'Alexandre Dumas',          ano: '2002' }
];

app.get('/', (_req, res) => {
  res.render('index', { livros: listaLivros });
});

app.get('/buscar', (req, res) => {
  let titulo = req.query?.titulo || '';

  const livrosPesquisados = listaLivros.filter(livro => {
    const tituloLivro = livro.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
    titulo = titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
    return tituloLivro.includes(titulo);
  });

  res.render('index', { livros: livrosPesquisados});
});

app.get('/buscar/:ano', (req, res) => {
  const { ano } = req.params;
  const livrosPesquisados = listaLivros.filter(livro => livro.ano == ano.trim());
  res.render('index', { livros: livrosPesquisados});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n\x1b[43;1m Funcionou!!! \x1b[0m Servidor está rodando na porta: ${PORT}\x1b[0m\n`);
});