const Cachorro = require("./Cachorro")
const Gato = require("./Gato")
const AveExotica = require("./AveExotica")
const Roedor = require("./Roedor")

class Factory {
    static criar(tipo, nome, idade) {
        if(tipo === "Cachorro") {
            return new Cachorro(nome, idade)
        } 
        if(tipo === "Gato") {
            return new Gato(nome, idade)
        }
        if(tipo === "AveExotica") {
            return new AveExotica(nome, idade)
        }
        if(tipo === "Roedor") {
            return new Roedor(nome, idade)
        }
        throw new error(`Tipo de paciente inválido`)
        
    }
}

module.exports = Factory