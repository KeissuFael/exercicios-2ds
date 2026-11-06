const express = require("express")
const app = express()
const routes = require("./routes/pedidos")

app.use("/", routes)

module.exports = app