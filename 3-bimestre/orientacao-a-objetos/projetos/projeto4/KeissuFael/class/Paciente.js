class Paciente {
    #nome
    #idade
    
    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
        this.registros = []
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

    adicionarRegistro(registro) {
        if(registro.valor > 0) {
            this.registros.push(registro)
        } else {
            throw new Error("Valor inválido")
        }
    }
}

module.exports = Paciente