const LoginModel = require("../models/loginModel")

module.exports = {
    create: function (email, senha, callback) {
        new LoginModel(null, email, senha).create((loginId) => { callback(loginId) })
    },

    isLoginCorrect: function (email, senha, callback) {
        new LoginModel(null, email, senha).fetch((err, result) => {
            if (err)
                callback(false)
            else if (!result.lenght)
                callback(false)
            else
                callback(result[0].senha.localeCompare(senha))
        })
    }
}
