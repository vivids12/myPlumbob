var objetivoModel = require("../models/objetivoModel");

function listar(req, res) {
    objetivoModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var descricao = req.body.desc;
    var peso = req.body.peso;
    var idDesafio = req.body.idDesafio;
    var idUsuario = req.body.idUsuario;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    objetivoModel.cadastrar(descricao, peso, idDesafio, idUsuario).then(function(resposta){
        res.status(200).send("Desafio criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrarViuvaNegra(req, res) {
  objetivoModel.cadastrarViuvaNegra().then(function(resposta){
      res.status(200).send("Objetivos cadastrados com sucesso");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function cadastrar7BBs(req, res) {
  objetivoModel.cadastrar7BBs().then(function(resposta){
      res.status(200).send("Objetivos cadastrados com sucesso");
  }).catch(function(erro){
      res.status(500).json(erro.sqlMessage);
  })
}

function buscarObjetivosPorSave(req, res) {
    var idDesafio = req.params.idDesafio;
  
    objetivoModel.buscarObjetivosPorSave(idDesafio).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os objetivos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }


  function atualizarObjetivosCumpridos(req, res){
    var idObj = req.params.idObj;

    objetivoModel.atualizarObjetivosCumpridos(idObj).then((resultado) => {
      res.status(200).send("Objetivos atualizados com sucesso");
      }).catch(function(erro){
          res.status(500).json(erro.sqlMessage);
      })
  }
  
  function atualizarObjetivosNaoCumpridos(req, res){
    var idObj = req.params.idObj;

    objetivoModel.atualizarObjetivosNaoCumpridos(idObj).then((resultado) => {
      res.status(200).send("Objetivos atualizados com sucesso");
      }).catch(function(erro){
          res.status(500).json(erro.sqlMessage);
      })
  }
module.exports = {
    cadastrar,
    cadastrarViuvaNegra,
    cadastrar7BBs,
    buscarObjetivosPorSave,
    atualizarObjetivosCumpridos,
    atualizarObjetivosNaoCumpridos
}