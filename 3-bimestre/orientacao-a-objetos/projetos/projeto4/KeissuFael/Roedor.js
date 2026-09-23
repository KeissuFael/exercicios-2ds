const Paciente = require("./Paciente")

class Roedor extends Paciente {
    descricao() {
        return `Consulta de roedor registrada`
    }
}

module.exports = Roedor