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

        db.conexao.query(
            sql,
            values,
            (erro, results) => {
                if (erro)
                    callback(erro)
                else
                    callback(results.insertId);
            }
        )
    }

    fetch(callback) {
        const sql = 'SELECT * FROM login WHERE email = ?;'

        const values = [this.email]

        db.conexao.query(
            sql,
            values,
            (err, result) => {
                if (err)
                    callback(err, null)
                else
                    callback(null, result)
            }
        )
    }
}

module.exports = LoginModel;