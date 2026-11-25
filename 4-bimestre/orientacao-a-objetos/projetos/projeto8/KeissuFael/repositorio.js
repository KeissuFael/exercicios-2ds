const fs = require("fs/promises")

const ARQUIVO = process.env.ARQUIVO_PEDIDOS || "pedidos.json"

async function listar() {
     try {
        const conteudo = await fs.readFile(ARQUIVO, "utf-8")
        return JSON.parse(conteudo)
    } catch (erro) {
        return []
    }
}

async function gravar(produtos) {
    await fs.writeFile(ARQUIVO, JSON.stringify(produtos, null, 2))
}


async function salvar(produto) {
    const produtos = await listar()
    produtos.push(produto)
    await gravar(produtos)
    return produto
}

async function atualizar(id, dados) {
    const conteudo = await fs.readFile(ARQUIVO, "utf-8")
    const pedidos = JSON.parse(conteudo)

    const indice = pedidos.findIndex(c => c.id === id)

    if (indice === -1) {
        return null
    }

    pedidos[indice] = {
        ...pedidos[indice],
        ...dados
    }

    await fs.writeFile(ARQUIVO, JSON.stringify(pedidos, null, 2))

    return pedidos[indice]
}

async function remover(id) {
    const conteudo = await fs.readFile(ARQUIVO, "utf-8")
    const pedidos = JSON.parse(conteudo)

    const restantes = pedidos.filter(c => c.id !== id)

    if (restantes.length === pedidos.length) {
        return false
    }

    await fs.writeFile(ARQUIVO, JSON.stringify(restantes, null, 2))
    return true
}

async function contar() {
    const lista = await listar()

    if(ARQUIVO == -1) {
        return 0
    }

    return lista.length
}

module.exports = { listar, salvar, atualizar, remover, contar }