const Vacina = require("./Vacina")

class Atendimento {
    constructor(valor) {
        this.valor = valor
        this.item = []
    }

    adicionarRegistro(registro) {
        if(registro.valor < 0) {
            this.item.push(registro)
        } else {
            throw new error("Valor inválido")
        }
    }
}