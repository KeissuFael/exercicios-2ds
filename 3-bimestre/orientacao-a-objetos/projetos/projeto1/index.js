class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.disponivel = true
    }

    emprestar() {
        this.disponivel = false
    }

    devolver() {
        this.disponivel = true
    }

    estaDisponivel() {
        if(this.disponivel === true) {
            return true
        } else {
            return false
        }
    }
}

const livro1 = new Livro("O Hobbit", "J.R.R Tolkien", 1937)
const livro2 = new Livro("1984", "George Orwell", 1949)

module.exports = Livro