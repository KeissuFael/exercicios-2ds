const Vacina = require("../class/Vacina")
const PacienteFactory = require("../class/PacienteFactory")

class Agenda {
    constructor(nome) {
        this.nome = nome
        this.membros = []
        this.categorias = []
    }

    adicionarCategoria(categoria) {
        this.categorias.push(categoria)
    }

    adicionarMembro(membro) {
        this.membros.push(membro)
    }
}