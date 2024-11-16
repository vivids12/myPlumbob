var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM desafio;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarDesafiosPorUsuario(idUsuario) {

    var instrucaoSql = `SELECT nome FROM desafio WHERE fkUsuario = ${idUsuario}`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function selecionarDesafioPorUsuario(idUsuario) {

    var instrucaoSql = `SELECT nome FROM desafio WHERE fkUsuario = ${idUsuario}`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, idUsuario) {
    var instrucao = '';
    if (nome == '7bbs'){
        instrucao = `
        INSERT INTO desafio (nome, fkUsuario, descricao) VALUES ('Desafio dos 7 bebês', '${idUsuario}', 
            'Nesse desafio sua sim é recém-casada 
            e descobre que está grávida de 7 bebês. Infelizmente o cônjuge dela não aceita ficar com as criança e 
            a deixa sozinha. Sendo assim, eles se separam e ela precisa cria-los sozinha da melhor maneira.');
    `;
    } else {
        instrucao = `
        INSERT INTO desafio (nome, fkUsuario, descricao) VALUES ('Desafio da viúva negra', '${idUsuario}', 
            'O Desafio da Viúva Negra tem como base a espécie de aranha que mata e come o macho após o acasalamento. 
            O desafio consiste em criar uma personagem que se case várias vezes durante a vida, matando cada um dos 
            cônjuges pelo caminho e herdando o seu dinheiro.');
    `;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    buscarDesafiosPorUsuario,
    selecionarDesafioPorUsuario
};