const LixeiraModel = require("../models/lixeiraModel")

module.exports = {
    get: function (idusuario, callback) {
        new LixeiraModel().get(idusuario, (err, lixeiras) => { callback(err, lixeiras) })
    }
}
