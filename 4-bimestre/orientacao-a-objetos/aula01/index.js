const projeto = {
    nome: "aula01",
    scripts: ["test", "start", "dev"],

    rodar() {
    return `Executando: npm run ${projeto.scripts[2]}`
    },

    temScript(script) {
    if(script === "test" || script === "start" || script === "dev") {
        return true
    } else {
        return false
    }
}
}

module.exports = projeto