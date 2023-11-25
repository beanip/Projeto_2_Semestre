const UsuarioModel = require("../../models/usuarioModel")

module.exports = {
    isNullOrEmpty: function (string) {
        return !string || string.length === 0
    },

    isEqual: function (string1, string2) {
        return string1 === string2
    },

    salvarUsuarioSessao: function (usuario) {
        window.sessionStorage.setItem('idusuario', usuario.idusuario)
        window.sessionStorage.setItem('nome', usuario.nome)
        window.sessionStorage.setItem('email', usuario.email)
        window.sessionStorage.setItem('isAdmin', usuario.isAdmin)
        window.sessionStorage.setItem('senha', usuario.senha)
        window.sessionStorage.setItem('isHabilitado', usuario.isHabilitado)
    },

    salvarEmailSessao:function (email) {
        window.sessionStorage.setItem('email', email)
    },

    pegarEmailSessao: function() {
        return window.sessionStorage.getItem('email')
    },

    limparSessao: function () {
        window.sessionStorage.clear()
    },

    pegarUsuarioSessao: function () {
        var usuario = new UsuarioModel()
        
        usuario.idusuario = window.sessionStorage.getItem('idusuario')
        usuario.nome = window.sessionStorage.getItem('nome')
        usuario.email = window.sessionStorage.getItem('email')
        usuario.isAdmin = window.sessionStorage.getItem('isAdmin')
        usuario.senha = window.sessionStorage.getItem('senha')
        usuario.isHabilitado = window.sessionStorage.getItem('isHabilitado')

        return usuario
    }
}