CREATE TABLE produtos (
codigo serial primary key,
titulo text not null,
data_cadastro date not null,
preco real not null,
descricao text not null,
imagem text not null
);

INSERT INTO produtos (titulo, data_cadastro, preco, descricao, imagem)
VALUES
('AL CAPONE','2023-06-07',25,'Molho de tomate, mussarela, provolone fatiado, milho e bacon.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/al-capone.png?nocache=080623224241'),
('AMERICANA','2023-06-07',25,'Molho de tomate, mussarela e presunto.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/americana.png?nocache=080623224241'),
('ATUM','2023-06-06',25,'Molho de tomate, mussarela e atum.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/atum.png?nocache=080623224241'),
('BACON','2023-06-05',25,'Molho de tomate, mussarela e bacon','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/bacon.png?nocache=080623224241'),
('BRÓCOLIS','2023-06-05',25,'Molho de tomate, mussarela e brócolis.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/brocolis-especial.png?nocache=080623224241'),
('CALABRESA','2023-06-04',25,'Molho de tomate, mussarela e calabresa fatiada.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/calabresa.png?nocache=080623224241'),
('CARNE SECA','2023-06-03',25,'Molho de tomate, mussarela e carne seca.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/carne-seca.png?nocache=080623224241'),
('ESCONDIDINHO DE FRANGO','2023-06-02',25,'Purê de batata com frango desfiado e mussarela.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/escondidinho-de-frango.png?nocache=080623224241'),
('FILÉ A PARMEGIANA','2023-06-01',25,'Carne bovina, mussarela, molho de tomate e ervilha.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/file-a-parmegiana.png?nocache=080623224241'),
('FRANGO','2023-05-30',25,'Molho de tomate, mussarela e frango desfiado.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/frango.png?nocache=080623224241'),
('HAMBÚRGUER','2023-05-27',25,'Molho de tomate, mussarela e hambúrguer.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/hamburguer-gourmet.png?nocache=080623224241'),
('ITALIANA','2023-05-23',25,'Molho de tomate, mussarela, palmito e tomate seco.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/italiana.png?nocache=080623224241'),
('LOMBO AO CREME','2023-05-23',25,'Molho de tomate, mussarela, lombo canadense fatiado e creme de queijo.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/lombo.png?nocache=080623224241'),
('MARGHERITA','2023-05-20',25,'Molho de tomate, mussarela, manjericão e parmesão.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/margherita.png?nocache=080623224241'),
('PALMITO','2023-05-10',25,'Molho de tomate, mussarela e palmito.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/palmito.png?nocache=080623224241'),
('PORTUGUESA','2023-04-29',25,'Molho de tomate, mussarela, presunto, palmito, ervilha e ovo.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/portuguesa.png?nocache=080623224241'),
('QUATRO QUEIJOS','2023-04-29',25,'Molho de tomate, mussarela, gorgonzola, requeijão e provolone fatiado.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/iv-queijos.png?nocache=080623224241'),
('STROGONOFF DE CARNE','2023-04-28',25,'Strogonoff de carne, mussarela e batata palha.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/strogonoff-de-carne.png?nocache=080623224241'),
('STROGONOFF DE FRNAGO','2023-04-27',25,'Strogonoff de frango, mussarela e batata palha.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/strogonoff-de-frango.png?nocache=080623224241'),
('VEGETARIANO','2023-04-25',25,'Molho de tomate, mussarela, ervilha, milho e palmito.','https://www.redelevepizza.com.br/assets/imagens/pizzas/small/vegetariana.png?nocache=080623224241')
