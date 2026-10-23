const express = require("express")

const livros = [{id:1, titulo: "Dom Casmurro", autor: "Machado de Assis"}, {id: 2, titulo: "O Cortico", autor: "Aluisio Azevedo"}]
const app = express()

app.get("/", (req, res) => {
    res.json({mensagem: "API de Livros"})
})

app.get("/livros", (req, res) => {
    res.json(livros)
})

app.get("/livros/total", (req, res) => {
    res.json({total: livros.length})
})

app.post("/livros", (req, res) => {
    res.status(201)
    res.json({mensagem: "Livro criado"})
})

module.exports = app