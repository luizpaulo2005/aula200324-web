const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//configurar para usar json
app.use(express.json());
//configurar a lib para parser extended 
//true aceita objetos aninhados lib qs
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));
app.set('view engine', 'ejs');

const aula = {
    disciplina: 'Desenvolvimento Web',
    semestre: 6
}

const artigos = [
    { titulo: 'Java', descricao: 'Enterprise edition', paginas: 10 },
    { titulo: 'Python', descricao: 'Machine learning', paginas: 5 },
    { titulo: 'Lua', descricao: 'Jogos digitais', paginas: 3 },
];
artigos.push({ titulo: 'C#', descricao: 'Aprenda a programar', paginas: 8 });

app.get('/', (req, res) => {
    res.render('index', { aula });
});

app.post('/', (req, res) => {
    artigos.push({ titulo: req.body.titulo, descricao: req.body.descricao, paginas: parseInt(req.body.paginas) });
    console.log(artigos);
    res.status(200).render('sucesso');
});

app.get('/artigos', (req, res) => {
    res.render('artigos', { artigos })
});

app.get('/artigos/:numero', (req, res) => {
    res.render('artigo', { artigo: artigos[req.params.numero] });
});

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});

app.get('/artigosq', (req, res) => {
    console.log('Numero: ' + req.query.numero);
    console.log('Titulo: ' + req.query.titulo);
    //todo
});