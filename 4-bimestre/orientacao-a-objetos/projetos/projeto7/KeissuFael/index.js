const express = require("express")
const app = express()
const routes = require("./routes/pedidos")

app.use(express.json())
app.use("/", routes)

app.use((req, res, next) => {
    res.status(404).json({
        "erro": "Rota nao encontrada"
    })
})

module.exports = app