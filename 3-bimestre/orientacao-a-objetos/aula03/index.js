class Animal {
    constructor(nome, especie) {
        this.nome = nome
        this.especie = especie
    }
}

const cachorro = new Animal("Rex", "Cachorro")
const gato = new Animal("Mimi", "Gato")

module.exports = [cachorro, gato]