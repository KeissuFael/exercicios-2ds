const projeto = {
    nome: "aula01",
    script: ["test", "start", "dev"]
}

function rodar() {
    return `Executando: npm run ${projeto.script}`
}

function temScript(script) {
    if(temScript) {
        return true
    } else {
        return false
    }
}

module.exports = projeto