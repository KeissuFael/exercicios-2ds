class CertificadoCarga {
    constructor(responsavel) {
        if(!responsavel) {
            throw new Error("Responsável é obrigatório")
        }
        this.responsavel = responsavel
    }
    
    emitir() {
        return ``
    }
}

class CargaSeca extends CertificadoCarga {
    emitir() {
        return `Certificado de carga seca emitido para: ${this.responsavel}`
    }
}

class CargaRefrigerada extends CertificadoCarga {
    emitir() {
        return `Certificado de carga refrigerada emitido para: ${this.responsavel}`
    }
}

class CargaPerigosa extends CertificadoCarga {
    emitir() {
        return `Certificado de carga perigosa emitido para: ${this.responsavel}`
    }
}

class CargaViva extends CertificadoCarga {
    emitir() {
        return `Certificado de carga viva emitido para: ${this.responsavel}`
    }
}

module.exports = CertificadoCarga
module.exports.CargaSeca = CargaSeca
module.exports.CargaRefrigerada = CargaRefrigerada
module.exports.CargaPerigosa = CargaPerigosa
module.exports.CargaViva = CargaViva
