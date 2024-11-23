CREATE DATABASE myplumbob;
USE myplumbob;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha varchar(50)
);

SELECT * FROM usuario;
SELECT * FROM save;
INSERT INTO usuario VALUES (DEFAULT, 'vivi', 'vivi@gmail.com', '123');
INSERT INTO usuario VALUES (DEFAULT, 'gabi', 'gabi@gmail.com', '123');

INSERT INTO save VALUES (DEFAULT, 1, 'save1', 'algumacoisa', '2024-01-01');
INSERT INTO save VALUES (DEFAULT, 3, 'save2', 'algumacoisa', '2024-01-01');

INSERT INTO save VALUES (DEFAULT, 2, 'save teste', 'algumacoisa', '2024-01-01');

UPDATE save SET fkUsuario = 3 WHERE idSave = 4; 

CREATE TABLE save(
	idSave INT AUTO_INCREMENT,
    fkUsuario INT NOT NULL,
    PRIMARY KEY (idSave, fkUsuario),
    nome VARCHAR(45),
    descricao VARCHAR(100),
    dtCriacao DATE,
    CONSTRAINT fkSaveUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

SELECT * FROM save JOIN usuario ON fkUsuario = idUsuario WHERE idUsuario = 2;
SELECT idSave FROM save ORDER BY idSave DESC LIMIT 1;

CREATE TABLE desafio(
	idDesafio INT AUTO_INCREMENT,	
    fkSave INT,
    fkUsuario INT,
    PRIMARY KEY (idDesafio, fkSave, fkUsuario),
    nome VARCHAR(45),
    descricao VARCHAR(500),
    CONSTRAINT fkSaveDesafio FOREIGN KEY (fkSave) REFERENCES save(idSave),
    CONSTRAINT fkUsuarioDesafio FOREIGN KEY (fkUsuario) REFERENCES save(fkUsuario)
);

SELECT * FROM desafio WHERE fkSave = (SELECT idSave FROM save WHERE fkUsuario = 2);
SELECT * FROM save;
SELECT s.idSave, s.nome, DATE_FORMAT(dtCriacao, '%d/%m/%Y' ) AS dtCriacao, s.descricao, d.idDesafio, d.nome, d.descricao FROM save AS s 
	JOIN desafio AS d ON fkSave = idSave WHERE s.fkUsuario = 1;
    SELECT * FROM desafio;
     INSERT INTO desafio (nome, fkSave, fkUsuario, descricao) VALUES ('Desafio da viúva negra', (SELECT idSave FROM save ORDER BY idSave DESC LIMIT 1),
			1,
            'O Desafio da Viúva Negra tem como base a espécie de aranha que mata e come o macho após o acasalamento.
            O desafio consiste em criar uma personagem que se case várias vezes durante a vida, matando cada um dos
            cônjuges pelo caminho e herdando o seu dinheiro.');


INSERT INTO desafio(nome,descricao) VALUES ('Desafio da viúva negra', 'O Desafio da Viúva Negra tem 
	como base a espécie de aranha que mata e come o macho após o acasalamento. O desafio consiste em 
    criar uma personagem que se case várias vezes durante a vida, matando cada um dos cônjuges pelo 
    caminho e herdando o seu dinheiro.');
    
INSERT INTO desafio(nome,descricao) VALUES ('Desafio dos 7 bebês', 'Nesse desafio sua sim é recém-casada 
	e descobre que está grávida de 7 bebês. Infelizmente o cônjuge dela não aceita ficar com as criança e 
    a deixa sozinha. Sendo assim, eles se separam e ela precisa cria-los sozinha da melhor maneira.');

CREATE TABLE objetivos(
	idObj INT AUTO_INCREMENT,
    fkDesafio INT NOT NULL,
    PRIMARY KEY (idObj, fkDesafio),
    progresso BOOLEAN,
    descricao VARCHAR(100),
    peso INT,
    CONSTRAINT fkObjDesafio FOREIGN KEY (fkDesafio) REFERENCES desafio(idDesafio)
);

CREATE TABLE regras(
	idRegra INT AUTO_INCREMENT,
    fkDesafio INT NOT NULL,
    PRIMARY KEY (idRegra, fkDesafio),
    descricao VARCHAR(200),
    CONSTRAINT fkRegraDesafio FOREIGN KEY (fkDesafio) REFERENCES desafio(idDesafio)
);

INSERT INTO regras(fkDesafio, descricao) VALUES 
	(1,'Crie uma sim mulher jovem adulta'),
    (1,'Aspiração: Baronesa das mansões ou Romantica em série'),
    (1,'Traços: Romantica, Esnobe e Materialista'),
    (1,'Com o dinheiro inicial construa sua casa ou se mude para uma'),
    (1,'Antes de sair para procurar um pretendente atinja o nível 5 da habilidade de carisma'),
    (1,'É permitido ganhar dinheiro com habilidades e vendendo itens da vizinhança ANTES de arranjar um marido'),
    (1,'É permitido ter um emprego de meio periodo ANTES de arranjar um marido'),
    (1,'Não é permitido fazer as duas coisas ao mesmo tempo'),
    (1,'O limite máximo de dinheiro que a Sim pode acumular antes de se casar é §1.200'),
    (1,'Caso o primeiro casamento seja planejado com a expansão Histórias de Casamento e você não tiver dinheiro suficiente, é permitido usar cheat para adicionar os fundos necessários e pagar pela cerimômia;'),
    (1,'É opcional organizar uma festa de casamento, mas é obrigatório fazer uma viagem de férias pra simular a lua de mel pra qualquer destino por pelo menos 1 dia'),
	(1,'Tenha uma foto do casamento ou uma selfie com o marido para guardar de recordação. Essa foto deve ficar exposta!'),
	(1,'Todos os maridos devem trabalhar normalmente e ganhar pelo menos 3 promoções em suas carreiras antes de morrerem'),
    (1,'A Sim deverá ter outro pretendente e manter o caso em segredo até a morte do marido atual'),
    (1,'Se o pretendente já for casado, a Sim precisa convencê-lo a se separar e se tornar inimiga da ex esposa'),
    (1,'Se o marido não morrer de velhice, todas as mortes devem ser provocadas pela própria Sim'),
    (1,'A Sim deve manter um cemitério com as lápides dos falecidos para que seus fantasmas fiquem vagando pelo lote e importunando a viúva. Sempre invoque o espírito pra manter o falecido por perto');

INSERT INTO objetivos(fkDesafio, progresso, descricao, peso) VALUES 
    (1, FALSE, 'Atinjir nível 5 na habilidade de carisma', 1),
    (1, FALSE, 'Casar-se a primeira vez', 2),
    (1, FALSE, 'Matar o primeiro marido', 2),
    (1, FALSE, 'Casar-se com o último marido', 2),
    (1, FALSE, 'Matar o último marido', 2),
    (1, FALSE, 'Reviver um dos maridos', 3),
    (1, FALSE, 'Casar-se novamente com esse marido', 1),
    (1, FALSE, 'Alcançar nível 10 na habilidade de Carisma', 3),
    (1, FALSE, 'Alcançar nível 10 na habilidade de Dança', 3),
    (1, FALSE, 'Alcançar nível 10 na habilidade de Culinária', 3),
    (1, FALSE, 'Alcançar nível 10 na habilidade de Gourmet', 3),
    (1, FALSE, 'Acumular §1.000.000 em dinheiro', 4);