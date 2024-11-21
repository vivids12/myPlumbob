var saveModel = require("../models/saveModel");
var desafioModel = require("../models/desafioModel");

function listar(req, res) {
  saveModel.listar().then(function (resultado) {
    // precisamos informar que o resultado voltará para o front-end como uma resposta em json
    res.status(200).json(resultado);
  }).catch(function (erro) {
    res.status(500).json(erro.sqlMessage);
  })
}

function cadastrar(req, res) {
  var nome = req.body.nome;
  var data = req.body.dtCriacao;
  var desc = req.body.desc;
  var idUsuario = req.body.idUsuario;
  var nomeDesafio = req.body.nomeDesafio;

  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  }
  if (idUsuario == undefined) {
    res.status(400).send("Seu usuario está undefined!");
  }

  saveModel.cadastrar(nome, data, desc, idUsuario)
    .then(
      function (resposta) {
        // res.status(200).send("Save criado com sucesso");
        
      }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      })

  desafioModel.cadastrar(nomeDesafio, idUsuario).then(
    function (resultadoDesafio) {
      res.status(200).send("Desafio e save criados com sucesso");
    }).catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    })
}

function buscarSavesPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  saveModel.buscarSavesPorUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os saves: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  listar,
  cadastrar,
  buscarSavesPorUsuario
}