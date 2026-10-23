const express = require("express")
const router = express.Router()

const catalogo = [{ id: 1, nome: "Resistor", categoria: "passivo", preco: 1, emEstoque: true }, { id: 2, nome: "Arduino Uno", categoria: "placa", preco: 120, emEstoque: true }, { id: 3, nome: "Sensor DHT11", categoria: "sensor", preco: 25, emEstoque: false }]

router.get("/", (req, res) => {
    res.json(catalogo)
})

router.get("/em-estoque", (req, res) => {
    const emEstoque = catalogo.filter(catalogo => catalogo.emEstoque == true)
    res.json(emEstoque)
})

router.get("/total", (req, res) => {
    res.json({total: catalogo.length})
})

router.post("/", (req, res) => {
    res.status(201).json({mensagem: "Cadastro de componente realizado"})
})

module.exports = router