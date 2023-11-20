const lixeiraModel = require("../models/lixeiraModel")

module.exports = {
    get: function (idusuario, callback) {
        lixeiraModel.get(idusuario, (err, lixeiras) => { callback(err, lixeiras) })
    },
    create: function (tipo, localizacao, idusuario, callback) {
        lixeiraModel.create(tipo, localizacao, idusuario, (sucesso) => { callback(sucesso) })
    },
    edit: function (idlixeira, tipo, localizacao, callback) {
        lixeiraModel.edit(idlixeira, tipo, localizacao, (sucesso) => { callback(sucesso) })
    }
}
