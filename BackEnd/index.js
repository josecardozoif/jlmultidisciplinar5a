const express = require('express');
const path = require('path');
const Produto = require("./models/produto");
const cors= require('cors');
const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

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
    var produto = await Produto.selectOne(req.body.id);
    res.json(produto.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

//app.post('/produtos', async function(req, res){
 // try {
  //  var produtos = await Produto.insert(req.body);//adição do req para poder interagir com o Post (produto.js)
  //  res.json(produtos.rows);
  //} catch (error) {
 //   console.error('Erro ao criar novos produtos:', error);
 //   res.status(500).json({ error: 'Ocorreu um erro ao criar novos produtos' });
 // }
//});

app.post('/pessoa', async function(req,res){
  try{
    var pessoa = req.body
    var pessoa = await Pessoa.insert(pessoa);
    res.json(pessoa.rows)
  }catch(error){
    console.log("error")
  }
})

app.delete('/produtos', async function(req, res){
  try {
    var produtos = await Produto.delete(req.body.id);//adição do req para poder interagir com o Delete (produto.js)
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao deletar novos produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao deletar novos produtos' });
  }
});

//app.listen(3000, function() {
//  console.log('App de Exemplo escutando na porta 3000!')
//});

app.listen(3003, function() {
  console.log(`app de Exemplo escutando na porta! ${3003}`)
});