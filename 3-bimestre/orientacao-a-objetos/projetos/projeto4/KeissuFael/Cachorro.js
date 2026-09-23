const Paciente = require("./Paciente")

class Cachorro extends Paciente {
    descricao() {
        return `Consulta de cachorro registrada`
    }
}

module.exports = Cachorro