var database = require("../database/config");

function cadastrar(descricao, idDesafio) {
    var instrucao = `
    INSERT INTO regras (fkDesafio, descricao) VALUES (${idDesafio}, '${descricao}');`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarRegrasPorSave(idDesafio) {
    var instrucaoSql = `SELECT descricao FROM regras WHERE fkDesafio = ${idDesafio};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarViuvaNegra() {
    var selectSave = `
    SELECT idDesafio FROM desafio ORDER BY idDesafio DESC LIMIT 1
    `;

    var instrucao = `
    INSERT INTO regras(fkDesafio, descricao) VALUES 
    ((${selectSave}), 'Crie uma sim mulher jovem adulta'),
    ((${selectSave}), 'Aspiração: Baronesa das mansões ou Romantica em série'),
    ((${selectSave}), 'Traços: Romantica, Esnobe e Materialista'),
    ((${selectSave}), 'Com o dinheiro inicial construa sua casa ou se mude para uma'),
    ((${selectSave}), 'Antes de sair para procurar um pretendente atinja o nível 5 da habilidade de carisma'),
    ((${selectSave}), 'É permitido ganhar dinheiro com habilidades e vendendo itens da vizinhança ANTES de arranjar um marido'),
    ((${selectSave}), 'É permitido ter um emprego de meio periodo ANTES de arranjar um marido'),
    ((${selectSave}), 'Não é permitido fazer as duas coisas ao mesmo tempo'),
    ((${selectSave}), 'O limite máximo de dinheiro que a Sim pode acumular antes de se casar é §1.200'),
    ((${selectSave}), 'Caso o primeiro casamento seja planejado com a expansão Histórias de Casamento e você não tiver dinheiro suficiente, é permitido usar cheat para adicionar os fundos necessários e pagar pela cerimômia'),
    ((${selectSave}), 'É opcional organizar uma festa de casamento, mas é obrigatório fazer uma viagem de férias pra simular a lua de mel pra qualquer destino por pelo menos 1 dia'),
    ((${selectSave}), 'Tenha uma foto do casamento ou uma selfie com o marido para guardar de recordação. Essa foto deve ficar exposta!'),
    ((${selectSave}), 'Todos os maridos devem trabalhar normalmente e ganhar pelo menos 3 promoções em suas carreiras antes de morrerem'),
    ((${selectSave}), 'A Sim deverá ter outro pretendente e manter o caso em segredo até a morte do marido atual'),
    ((${selectSave}), 'Se o pretendente já for casado, a Sim precisa convencê-lo a se separar e se tornar inimiga da ex esposa'),
    ((${selectSave}), 'Se o marido não morrer de velhice, todas as mortes devem ser provocadas pela própria Sim'),
    ((${selectSave}), 'A Sim deve manter um cemitério com as lápides dos falecidos para que seus fantasmas fiquem vagando pelo lote e importunando a viúva. Sempre invoque o espírito pra manter o falecido por perto');`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar7BBs() {
    var selectSave = `
    SELECT idDesafio FROM desafio ORDER BY idDesafio DESC LIMIT 1
    `;

    var instrucao = `
    INSERT INTO regras(fkDesafio, descricao) VALUES 
    ((${selectSave}), 'Crie um sim mulher jovem adulto e 7 bebês'),
    ((${selectSave}), 'É permitido o uso de cheats para a criação da casa inicialmente, depois é necessário mudar o dinheiro para §1.000'),
    ((${selectSave}), 'Não é permitido ter um emprego fixo ou uma carreira'),
    ((${selectSave}), 'É permitido ter loja e restaurante, você também pode plantar, pintar, escrever, desde que seja um trabalho feito em casa'),
    ((${selectSave}), 'Os únicos cheats permitidos após o inicio da gameplay são o MOVEOBJECTS e o RESETSIM'),
    ((${selectSave}), 'Você precisa pagar todas as suas contas em dia'),
    ((${selectSave}), 'Não é permitido a ajuda externo de ninguém, exceto do bombeiro caso necessário'),
    ((${selectSave}), 'Completar os objetivos necessários para cada idade para crescer, se não aguardar o tempo do jogo'),
    ((${selectSave}), 'Os filhos podem ajudar nas despesas da casa');`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    buscarRegrasPorSave,
    cadastrarViuvaNegra,
    cadastrar7BBs
};