const LoginModel = require("../models/loginModel")

module.exports = {
    create: function (email, senha, callback) {
        new LoginModel(null, email, senha).create((loginId) => { callback(loginId) })
    },

    get: function (email, callback) {
        new LoginModel(null, email).get((err, result) => { callback(err, result) })
    }
}
