const http = require("http")
const { stringify } = require("querystring")
const { carregarConfig } = require("./config")

function handler(req, res) {
    const config = carregarConfig()

    if (req.url === "/") {
        res.statusCode = 200
        res.end(`Servidor de status: ${config.servico}`)
        return
    }

    if (req.url === "/ping") {
        res.statusCode = 200
        res.end("pong")
        return
    }

    if (req.url === "/status") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({
            "online": true,
            ...config
        }))
        return
    }

    if (req.url === "/versao") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({
            "servico": config.servico,
            "versao": process.env.VERSAO || "1.0.0"
        }))
        return
    }

    res.statusCode = 404
    res.end("Rota nao encontrada")
}

module.exports = handler