const express = require("express")
const componentesRouter = require("./componentes")
const clientesRouter = require("./clientes")
const promocoesRouter = require("./promocoes")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({mensagem: "API de Eletronica"})
})

router.use("/componentes", componentesRouter)
router.use("/clientes", clientesRouter)
router.use("/promocoes", promocoesRouter)

module.exports = router