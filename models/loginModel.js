const db = require('../database/database');

class LoginModel {

    constructor(id, email, senha) {
        this.id = id
        this.email = email
        this.senha = senha
    }

    create(callback) {
        const sql = 'insert into login (email, senha) values(?, ?)'
        const values = [this.email, this.senha]

        db.conexao.query(sql, values, (err, result) => { callback(err, result) })
    }

    get(callback) {
        const sql = 'SELECT * FROM login WHERE email = ?;'
        const values = [this.email]

        db.conexao.query(sql, values, (err, result) => { callback(err, result) })
    }
}

module.exports = LoginModel;