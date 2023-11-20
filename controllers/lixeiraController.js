const lixeiraModel = require("../models/lixeiraModel")

module.exports = {
    get: function (idusuario, callback) {
        lixeiraModel.get(idusuario, (err, lixeiras) => { callback(err, lixeiras) })
    }
}
