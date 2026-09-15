const filme = {
    titulo: "Interestelar",
    diretor: "Christopher Nolan",
    ano: 2014,

    apresentar() {
        return `Filme: ${filme.titulo}`
    }
}

console.log(filme.apresentar())

module.exports = filme
