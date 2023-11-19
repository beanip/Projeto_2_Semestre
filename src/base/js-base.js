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

    limparSessao: function () {
        window.sessionStorage.clear()
    }
}