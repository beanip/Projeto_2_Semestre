const db = require('../database/database')

class UsuarioModel {

    constructor(idusuario, nome, email, isAdmin, senha, isHabilitado) {
        this.idusuario = idusuario
        this.nome = nome
        this.email = email
        this.isAdmin = isAdmin
        this.senha = senha
        this.isHabilitado = isHabilitado
    }

    static get(email, callback) {
        const sql = 'SELECT * FROM usuarios WHERE email = ?;'
        const values = [email]

        db.conexao.query(sql, values, (err, result) => {
            if (err) {
                callback(err, null)
            } else {
                if (!result || result.length === 0) {
                    callback(null, null)
                } else {
                    this.idusuario = result[0].idusuario
                    this.nome = result[0].nome
                    this.email = result[0].email
                    this.isAdmin = result[0].isAdmin
                    this.senha = result[0].senha
                    this.isHabilitado = result[0].isHabilitado
                    callback(null, this)
                }
            }
        })
    }

    static updateSenha(senha, email, callback) {
        const sql = 'UPDATE usuarios SET senha = ? WHERE email = ?'
        const values = [senha, email]

        db.conexao.query(sql, values, (err, result) => {
            if (err)
                callback(false)
            else
                callback(true)
        })
    }
}

module.exports = UsuarioModel;