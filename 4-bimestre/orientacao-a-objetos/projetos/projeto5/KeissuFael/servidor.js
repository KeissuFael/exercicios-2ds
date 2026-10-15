const http = require("http")
const { carregarConfig } = require("./config")
const handler = require("./index")
const config = carregarConfig()

const servidor = http.createServer(handler)

servidor.listen(config.porta, () => {
    console.log(`${config.servico} rodando na porta ${config.porta}`)
})