function validarPedido(req, res, next) {
    if(!req.body.cliente) {
        return res.status(400).json({ 
            erro: "O campo cliente e obrigatorio"
        })
    }
    
    if(!req.body.item) {
        return res.status(400).json({ 
            erro: "O campo item e obrigatorio"
        })
    }

    if(typeof req.body.valor !== "number") {
        return res.status(400).json({ 
            erro: "O campo valor deve ser um numero"
        })
    }

    if(req.body.valor <= 0) {
        return res.status(400).json({ 
            erro: "O campo valor deve ser maior que zero"
        })
    }

    next()
}

module.exports = validarPedido