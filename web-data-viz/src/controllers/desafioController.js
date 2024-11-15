var desafioModel = require("../models/desafioModel");

function listar(req, res) {
    desafioModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var idUsuario = req.body.idUsuario;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    desafioModel.cadastrar(nome, idUsuario).then(function(resposta){
        res.status(200).send("Desafio criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarDesafiosPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;
  
    desafioModel.buscarDesafiosPorUsuario(idUsuario).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os desafios: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }

module.exports = {
    listar,
    cadastrar,
    buscarDesafiosPorUsuario
}