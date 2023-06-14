const express = require('express');
const path = require('path');
const Produto = require("./models/produto");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// rota produtos
app.get('/produtos', async function(req, res){
  try {
    var produtos = await Produto.select();
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

app.post('/produtos', async function(req, res){
  try {
    var produtos = await Produto.insert(req.body);//adição do req para poder interagir com o Post (produto.js)
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao criar novos produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao criar novos produtos' });
  }
});
app.post('/pessoas', async function(req, res){
  try {
    var produtos = await Produto.selectOne(req.body.id);
    res.json(produtos.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar pessoas' });
  }
});


app.delete('/produtos', async function(req, res){
  try {
    var produtos = await Produto.delete(req.body.id);//adição do req para poder interagir com o Delete (produto.js)
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao deletar novos produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao deletar novos produtos' });
  }
});

app.listen(3003, function() {
  console.log(`App de Exemplo escutando na porta  ${3003}!`)
});