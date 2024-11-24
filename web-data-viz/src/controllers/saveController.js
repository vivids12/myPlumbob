var saveModel = require("../models/saveModel");
var desafioModel = require("../models/desafioModel");
var objetivoModel = require("../models/objetivoModel");
var regraModel = require("../models/regraModel");

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
      }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      })

  desafioModel.cadastrar(nomeDesafio, idUsuario).then(
    function (resultadoDesafio) {
      console.log('Desafio cadastrado');

      if (nomeDesafio == 'viuva negra') {
        objetivoModel.cadastrarViuvaNegra().then(
          function (resultadoObjetivo) {
            console.log('Objetivos cadastrados');
          })
      } else if (nomeDesafio == '7bbs'){
        objetivoModel.cadastrar7BBs().then(
          function (resultadoObjetivo) {
            console.log('Objetivos cadastrados');
          })
      } else {

      };
      
      if (nomeDesafio == 'viuva negra') {
        regraModel.cadastrarViuvaNegra().then(
          function (resultadoObjetivo) {
            console.log('Regras cadastrados');
          })
      } else if (nomeDesafio == '7bbs'){
        regraModel.cadastrar7BBs().then(
          function (resultadoObjetivo) {
            console.log('Regras cadastrados');
          })
      } else {

      }

      saveModel.buscarSavesPorUsuario(idUsuario)
      .then((resultadoSaves) => {
        desafioModel.buscarDesafiosPorUsuario(idUsuario)
          .then((resultadoDesafios) => {
            res.json({
              saves: resultadoSaves,
              desafios: resultadoDesafios
            });
          })
      });
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    })
}


function buscarSavesPorUsuario(req, res) {
  var idUsuario = req.params.idUsuario;

  saveModel.buscarSavesPorUsuario(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.json({
        saves: resultadoSaves,
        desafios: resultadoDesafios
      });
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os saves: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function atualizarDescricao(req, res) {
  var idSave = req.body.idSave;
  var descricao = req.body.descricao;
  var idUsuario = req.body.idUsuario;

  saveModel.atualizarDescricao(idSave, descricao).then(
    function(resultado) {
      saveModel.buscarSavesPorUsuario(idUsuario).then(
        function(resultadoSaves){
          res.json({
            saves: resultadoSaves,
          });
        }
      )
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })

}

module.exports = {
  cadastrar,
  buscarSavesPorUsuario,
  atualizarDescricao
}