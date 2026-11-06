const express = require("express")
const validarPedido = require("../middlewares/validarPedido")
const router = express.Router()

const pedidos = [
    { id: 1, cliente: "Ana", item: "X-Burguer", valor: 25, status: "entregue" },
    { id: 2, cliente: "Bruno", item: "X-Salada", valor: 28, status: "preparando" },
    { id: 3, cliente: "Carla", item: "Batata", valor: 15, status: "preparando" }
]

router.get("/pedidos", (req, res) => {
    const status = req.query
    const valorMin = Number(req.query)

    if(status) {
        res.json(pedidos.filter(p => p.status == "preparando"))
    }

    if(valorMin) {
        res.json(pedidos.filter(p => p.valor >= 28))
    }

    if(status && valorMin) {
        res.json(pedidos.filter(p => p.status == "preparando" && p.valor >= 28))
    }
    
    res.json(pedidos)
})

router.get("/pedidos/:id", (req, res) => {
    const id = Number(req.params.id)
    const pedido = pedidos.find(p => p.id === id)

    if(!pedido) {
        return res.status(404).json({ erro: "Pedido nao encontrado" })
    }

    res.json(pedido)
})

router.post("/pedidos", validarPedido, (req, res) => {
    pedidos.push(req.body)
    res.status(201).json({ mensagem: "Registro de pedido criado"})
})

module.exports = router