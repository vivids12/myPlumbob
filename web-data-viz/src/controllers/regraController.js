var regraModel = require("../models/regraModel");

function cadastrar(req, res) {
    var descricao = req.body.descricao;
    var idDesafio = req.body.idDesafio;

    regraModel.cadastrar(descricao, idDesafio).then(function(resposta){
        res.status(200).send("Regra adicionada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrarViuvaNegra(req, res) {
  regraModel.cadastrarViuvaNegra().then(function(resposta){
      res.status(200).send("Regras cadastrados com sucesso");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function cadastrar7BBs(req, res) {
  regraModel.cadastrar7BBs().then(function(resposta){
      res.status(200).send("Regras cadastrados com sucesso");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function buscarRegrasPorSave(req, res) {
    var idDesafio = req.params.idDesafio;
  
    regraModel.buscarRegrasPorSave(idDesafio).then((resultado) => {
      res.json({
        regras: resultado
      });
      
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar as regras: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }

module.exports = {
    cadastrar,
    cadastrarViuvaNegra,
    cadastrar7BBs,
    buscarRegrasPorSave
    
}