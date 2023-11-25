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

    static edit(idlixeira, tipo, localizacao, callback) {
        const sql = 'UPDATE lixeiras SET identificacao = ?, localizacao = ? WHERE idlixeira = ?'
        const values = [tipo, localizacao, idlixeira]

        db.conexao.query(sql, values, (err, result) => {
            if (err) {
                console.log(err);
                callback(false)
            }
            else
                callback(true)
        })
    }

    static create(tipo, localizacao, idusuario, callback) {
        const sql = 'INSERT INTO lixeiras(identificacao, localizacao, dataCadastro, quantidadeOcupada, dataUltimaTroca) VALUES (?, ?, ?, ?,?)'
        const values = [tipo, localizacao, new Date(), 0, new Date()]

        db.conexao.query(sql, values, (err, result) => {
            if (err) {
                callback(false)
            } else {
                const sql = 'INSERT INTO lixeira_has_usuario(lixeira_idlixeira, usuario_idusuario) VALUES (?, ?)'
                const values = [result.insertId, idusuario]

                db.conexao.query(sql, values, (err, result) => {
                    if (err)
                        callback(false)
                    else
                        callback(true)
                })
            }
        })
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