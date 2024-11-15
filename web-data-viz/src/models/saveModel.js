var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM save;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarSavesPorUsuario(idUsuario) {

    var instrucaoSql = `SELECT nome FROM save WHERE fkUsuario = ${idUsuario}`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

function cadastrar(nome, data, desc, idUsuario) {
    var instrucao = `
        INSERT INTO save (nome, dtCriacao, descricao, fkUsuario) VALUES ('${nome}', '${data}', '${desc}','${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    buscarSavesPorUsuario
};