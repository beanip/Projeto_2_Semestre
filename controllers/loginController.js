const LoginModel = require("../models/loginModel")

module.exports = {
    create: function (email, senha, callback) {
        new LoginModel(null, email, senha).create((loginId) => { callback(loginId) })
    }
}
