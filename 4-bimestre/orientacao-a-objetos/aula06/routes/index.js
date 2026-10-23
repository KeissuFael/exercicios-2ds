const express = require("express")
const alunosRouter = require("./alunos")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({mensagem: "API da Escola"})
})

router.use("/", alunosRouter)

module.exports = router