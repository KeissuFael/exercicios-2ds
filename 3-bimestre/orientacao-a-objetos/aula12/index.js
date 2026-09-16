class Usuario {
    static quantidade = 0

    constructor(nome) {
        this.nome = nome

        Usuario.quantidade++
    }

    static quantidadeUsuarios() {
        return Usuario.quantidade  
    }
}

const usuario1 = new Usuario("Ana")
const usuario2 = new Usuario("Carlos")
const usuario3 = new Usuario("Maria")

console.log(Usuario.quantidadeUsuarios)
console.log(usuario1.nome)

    module.exports = {Usuario, usuario1, usuario2, usuario3 }