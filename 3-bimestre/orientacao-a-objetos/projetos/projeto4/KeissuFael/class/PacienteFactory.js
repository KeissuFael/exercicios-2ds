const Cachorro = require("../class/Cachorro")
const Gato = require("../class/Gato")
const AveExotica = require("../class/AveExotica")
const Roedor = require("../class/Roedor")

class Factory {
    static criar(tipo, nome, idade) {
        if(tipo === "cachorro") {
            return new Cachorro(nome, idade)
        } 
        if(tipo === "gato") {
            return new Gato(nome, idade)
        }
        if(tipo === "ave") {
            return new AveExotica(nome, idade)
        }
        if(tipo === "roedor") {
            return new Roedor(nome, idade)
        }

        throw new Error("Tipo de paciente inválido")
        
    }
}

module.exports = Factory