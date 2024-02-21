const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

//seria o SELECT
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

//seria o INSERT
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON para ir para web
})

//seria o UPDATE
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON para ir para web
})

//seria o DELETE
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON para ir para web
})

app.listen(porta,() => {
    console.log(`Servidor esta executando na porta ${porta}.`)
})


/*
app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45})// Converter para JSON
})*/