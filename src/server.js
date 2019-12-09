const porta = 3003;

const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');


app.use(bodyParser.urlencoded({ extended: true }))

//read todos
app.get('/produtos', (req, res, next) => {
   res.send(bancoDeDados.getProdutos())
})

//read com id especifico
app.get('/produtos/:id', (req, res)=> {
    res.send(bancoDeDados.getProduto(req.params.id))
})

// insert
app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  //converte em json pra ir pra web
})

// update
app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  //converte em json pra ir pra web
})

// delete
app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)  //converte em json pra ir pra web
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
});