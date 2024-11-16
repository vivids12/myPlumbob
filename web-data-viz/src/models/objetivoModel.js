var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM objetivos;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDesafiosPorUsuario(idDesafio) {

    var instrucaoSql = `SELECT nome FROM objetivos WHERE fkDesafio = ${idDesafio}`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

function cadastrar(descricao, peso, idDesafio) {
    var instrucao = `
    INSERT INTO objetivos (fkDesafio, progresso, descricao, peso) VALUES ('${idDesafio}', false, ${descricao}, ${peso})`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarViuvaNegra(descricao, peso, idDesafio) {
    var instrucao = `
    INSERT INTO objetivos (fkDesafio, progresso, descricao, peso) VALUES ('${idDesafio}', false, ${descricao}, ${peso})`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    buscarDesafiosPorUsuario,
    cadastrarViuvaNegra
};