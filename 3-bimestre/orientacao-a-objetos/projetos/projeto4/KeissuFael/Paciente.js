class Paciente {
    #nome
    #idade
    
    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    descricao() {
        return `Paciente cadastrado na clínica`
    }
}

module.exports = Paciente 