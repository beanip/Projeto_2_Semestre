const UsuarioModel = require("../models/usuarioModel")

module.exports = {
    get: function (email, callback) {
        new UsuarioModel(null, null, email).get((err, usuario) => { callback(err, usuario) })
    }
}