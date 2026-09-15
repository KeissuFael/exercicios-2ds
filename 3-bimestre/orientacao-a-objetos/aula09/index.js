class Usuario {

    #nome

    constructor(nome) {
        this.#nome = nome
    }

    get nome() {
        return this.#nome
    }
}

const usuario = new Usuario("John")
console.log(usuario.nome)

module.exports = usuario