const CertificadoCarga = require("./CertificadoCarga.js")

class Factory {
    static criar(tipo, responsavel) {
        if(tipo === "cargaSeca") {
            return new CertificadoCarga.CargaSeca(responsavel)
        }

        if(tipo === "cargaRefrigerada") {
            return new CertificadoCarga.CargaRefrigerada(responsavel)
        }

        if(tipo === "cargaPerigosa") {
            return new CertificadoCarga.CargaPerigosa(responsavel)
        }
        if(tipo === "cargaViva") {
            return new CertificadoCarga.CargaViva(responsavel)
        }
        throw new Error("Tipo de certificado inválido")
    }
}

module.exports = Factory