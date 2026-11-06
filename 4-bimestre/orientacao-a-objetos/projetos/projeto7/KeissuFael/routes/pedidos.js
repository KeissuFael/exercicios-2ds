const express = require("express")
const validarPedido = require("../middlewares/validarPedido")
const router = express.Router()

const pedidos = [
    { id: 1, cliente: "Ana", item: "X-Burguer", valor: 25, status: "entregue" },
    { id: 2, cliente: "Bruno", item: "X-Salada", valor: 28, status: "preparando" },
    { id: 3, cliente: "Carla", item: "Batata", valor: 15, status: "preparando" }
]

router.get("/pedidos", (req, res) => {
    const status = (req.query.status)
    const valorMin = Number(req.query.valorMin)
    
    if(status && valorMin ) {
        return res.json(pedidos.filter(p => p.status == status && p.valor >= valorMin))
    }

    if(status) {
        return res.json(pedidos.filter(p => p.status == status))
    }

    if(valorMin) {
        return res.json(pedidos.filter(p => p.valor >= valorMin))
    }

    res.json(pedidos)
})

router.get("/pedidos/resumo", (req, res) => {
    const resumo = {
        total: pedidos.length,
        valorTotal: pedidos.reduce((valorT, pedido) => {
            return valorT + pedido.valor
        }, 0)
    }

    res.json(resumo)
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
    const novoPedido = {
        id: pedidos.length + 1,
        cliente: req.body.cliente,
        item: req.body.item,
        valor: req.body.valor,
        status: "recebido"

    }

    pedidos.push(novoPedido)
     return res.status(201).json({ mensagem: "Registro de pedido criado"})
})

module.exports = router