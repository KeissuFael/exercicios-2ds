const Vacina = require("../class/Vacina")

class Atendimento {
    constructor(valor, vacina) {
        this.valor = valor
        this.vacina = vacina
        this.registros = []
    }

    adicionarRegistro(registro) {
        if(registro.valor < 0) {
            this.registros.push(registro)
        } else {
            throw new error("Valor inválido")
        }
    }
}

module.exports = Atendimento