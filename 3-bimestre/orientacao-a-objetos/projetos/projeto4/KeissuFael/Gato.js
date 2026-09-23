const Paciente = require("./Paciente")

class Gato extends Paciente {
    descricao() {
        return `Consulta de gato registrada`
    }
}

module.exports = Gato