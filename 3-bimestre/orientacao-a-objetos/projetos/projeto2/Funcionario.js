class Funcionario {
    #salario
    static quantidade = 0

    constructor(nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.#salario = salario
        Funcionario.quantidade++
    }

    static quantidade() {
        return this.quantidade
    }

    get salario() {
        return this.#salario
    }

    apresentar() {
        return `${this.nome} - ${this.cargo}`
    }

    set salario(valor) {
        if(valor >= 0) {
            this.#salario = valor
        }
    }

    static quantidadeFuncionarios() {
        return this.quantidade
    }
}

const funcionario1 = new Funcionario("Ana", "Desenvolvedora", 5000)
const funcionario2 = new Funcionario("Carlos", "Analista", 3000)
const funcionario3 = new Funcionario("Maria", "Gerente", 2000)

module.exports = Funcionario