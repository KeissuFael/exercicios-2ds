const Vacina = require("./Vacina")
const PacienteFactory = require("./PacienteFactory")

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