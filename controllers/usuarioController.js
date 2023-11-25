const usuarioModel = require("../models/usuarioModel")

module.exports = {
    get: function (email, callback) {
        usuarioModel.get(email, (err, usuario) => { callback(err, usuario) })
    },
    updateSenha: function (senha, email, callback) {
        usuarioModel.updateSenha(senha, email, (sucesso) => { callback(sucesso) })
    }
}