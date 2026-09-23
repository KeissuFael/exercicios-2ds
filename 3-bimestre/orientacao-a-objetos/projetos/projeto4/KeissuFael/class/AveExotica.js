const Paciente = require("../class/Paciente")

class AveExotica extends Paciente {
    descricao() {
        return `Consulta de ave exótica registrada`
    }
}

module.exports = AveExotica