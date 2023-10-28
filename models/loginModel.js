const db = require('../database/database');

class LoginModel {

    constructor(id, email, senha) {
        this.id = id
        this.email = email
        this.senha = senha
    }

    create(callback) {
        db.abrirConexao()

        console.log(this.email);
        console.log(this.senha);

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

        db.fecharConexao();
    }
}

module.exports = LoginModel;