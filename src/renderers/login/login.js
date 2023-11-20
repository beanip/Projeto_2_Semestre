const { isEqual, isNullOrEmpty, salvarUsuarioSessao } = require('../../base/js-base')
const ipcRenderer = require('electron').ipcRenderer
const usuarioController = require('../../../controllers/usuarioController')

let btnEntrar = document.getElementById('btn-entrar'),
    btnRecuperarSenha = document.getElementById('btn-recuperar-senha'),
    inpEmail = document.getElementById('inp-email'),
    inpSenha = document.getElementById('inp-senha')

// Listeners
btnEntrar.addEventListener('click', e => {
    if (inpEmail.value && inpSenha.value) {
        usuarioController.get(inpEmail.value, (err, usuario) => {
            if (err)
                ipcRenderer.send('dialog', 'Algo deu errado, tente novamente.')
            else if (isNullOrEmpty(usuario))
                ipcRenderer.send('dialog', 'Email não existente')
            else {
                if (isEqual(usuario.senha, inpSenha.value)) {
                    salvarUsuarioSessao(usuario)
                    ipcRenderer.send('navegar', 'menu-monitorar')                  
                } else
                    ipcRenderer.send('dialog', 'Senha incorreta.')
            }
        })
    } else {
        ipcRenderer.send('dialog', 'Preencha todos os campos.')
    }
})

btnRecuperarSenha.addEventListener('click', e => {
    ipcRenderer.send('navegar', 'senha-recuperar')
})