const artigos = [
  { titulo: "Java", descricao: "Enterprise edition", paginas: 10 },
  { titulo: "Python", descricao: "Machine learning", paginas: 5 },
  { titulo: "Lua", descricao: "Jogos digitais", paginas: 3 },
];

exports.listarArtigos = (req, res) => {
  res.render("artigos", { artigos });
};

exports.buscarArtigoPorId = (req, res) => {
  res.render("artigo", { artigo: artigos[req.params.numero] });
};

exports.criarArtigo = (req, res) => {
  artigos.push({
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    paginas: parseInt(req.body.paginas),
  });
  console.log(artigos);
  res.status(200).render("sucesso");
};

exports.deletarArtigo = (req, res) => {
    const index = artigos.findIndex((item) => item.titulo === req.params.titulo);
    if (index === -1) {
      res.status(404).send("Artigo não encontrado");
    } else {
      artigos.splice(index, 1);
      res.status(200).send("Artigo deletado com sucesso");
    }
  }