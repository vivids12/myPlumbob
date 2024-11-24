var database = require("../database/config");

function buscarSavesPorUsuario(idUsuario) {
    var instrucaoSql = `SELECT idSave, nome, DATE_FORMAT(dtCriacao, '%d/%m/%Y' ) AS dtCriacao , descricao FROM save WHERE fkUsuario = ${idUsuario}`;
  
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

function atualizarDescricao(idSave, descricao){
    var instrucaoSQL = `
        UPDATE save SET descricao = '${descricao}' WHERE idSave = ${idSave};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

module.exports = {
    cadastrar,
    buscarSavesPorUsuario,
    atualizarDescricao
}