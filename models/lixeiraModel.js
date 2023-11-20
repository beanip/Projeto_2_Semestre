const db = require('../database/database')

class LixeiraModel {

    constructor(idlixeira, identificacao, localizacao, dataCadastro, quantidadeOcupada, dataUltimaTroca) {
        this.idlixeira = idlixeira
        this.identificacao = identificacao
        this.localizacao = localizacao
        this.dataCadastro = dataCadastro
        this.quantidadeOcupada = quantidadeOcupada
        this.dataUltimaTroca = dataUltimaTroca
    }

    static get(idusuario, callback) {
        const sql = 'SELECT * FROM lixeira_has_usuario WHERE usuario_idusuario = ?;'
        const values = [idusuario]

        db.conexao.query(sql, values, (err, result) => {
            if (err) {
                callback(err, null)
            } else {
                const values = []
                let sql = 'SELECT * FROM lixeiras'

                console.log(result.length);

                result.forEach(function (lixeira, i) {
                    if (i == 0)
                        sql = sql.concat(' WHERE idlixeira = ?')
                    else
                        sql = sql.concat(' OR idlixeira = ?')

                    values.push(lixeira.lixeira_idlixeira)
                })

                db.conexao.query(sql, values, (err, result) => {
                    if (err) {
                        callback(err, null)
                    } else {
                        if (!result || result.length === 0) {
                            callback(null, null)
                        } else {
                            let lixeiras = []

                            result.forEach(lixeira => {
                                lixeiras.push(new LixeiraModel(
                                    lixeira.idlixeira,
                                    lixeira.identificacao,
                                    lixeira.localizacao,
                                    lixeira.dataCadastro,
                                    lixeira.quantidadeOcupada,
                                    lixeira.dataUltimaTroca,
                                ))
                            })

                            callback(null, lixeiras)
                        }
                    }
                })
            }
        })
    }
}

module.exports = LixeiraModel;