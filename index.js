const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//configurar para usar json
app.use(express.json());
//configurar a lib para parser extended
//true aceita objetos aninhados lib qs
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

const artigosRoutes = require("./routes/artigosRoutes");
app.use("/artigos", artigosRoutes);

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});

const aula = {
  disciplina: "Desenvolvimento Web",
  semestre: 6,
};

app.get("/", (req, res) => {
  res.render("index", { aula });
});

// Aula 10/03/24 - Atividade - Finalizar a implementação das rotas abaixo nos arquivos corretos:

app.get("/artigosq", (req, res) => {
  console.log("Numero: " + req.query.numero);
  console.log("Titulo: " + req.query.titulo);
  //todo
});

app.put("/artigos/:titulo", (req, res) => {
  const index = artigos.findIndex((item) => item.titulo === req.params.titulo);

  if (index === -1) {
    res.status(404).send("Artigo não encontrado");
  } else {
    const { titulo, descricao, paginas } = req.body;
    artigos[index] = { titulo, descricao, paginas };
    res.status(200).json(artigos[index]);
  }
});

