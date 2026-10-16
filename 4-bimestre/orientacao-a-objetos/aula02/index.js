function handler(req, res) {
    if(req === "/") {
        statusCode = 200
        res.end("API no ar")
        return
    }

    if(req === "/status") {
        statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({"status": "online", "porta": Number(process.env.PORT) }))
        return
    }
}