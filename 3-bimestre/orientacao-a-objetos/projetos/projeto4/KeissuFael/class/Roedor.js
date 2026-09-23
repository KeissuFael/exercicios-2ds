const Paciente = require("../class/Paciente")

class Roedor extends Paciente {
    descricao() {
        return `Consulta de roedor registrada`
    }
}

module.exports = Roedor