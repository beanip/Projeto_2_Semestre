const ipcRenderer = require('electron').ipcRenderer
const { isNullOrEmpty, salvarEmailSessao } = require('../../base/js-base')
const usuarioController = require('../../../controllers/usuarioController')

let btnValidar = document.getElementById('btn-validar'),
    btnVoltar = document.getElementById('btn-voltar'),
    txtEmail = document.getElementById('inp-email')

btnValidar.addEventListener('click', e => {
    if (txtEmail.value) {
        usuarioController.get(txtEmail.value, (err, usuario) => {
            if (err)
                ipcRenderer.send('dialog', 'Algo deu errado, tente novamente.')
            else if (isNullOrEmpty(usuario))
                ipcRenderer.send('dialog', 'Email não existente')
            else {
                salvarEmailSessao(txtEmail.value)
                ipcRenderer.send('enviarCodigoRecuperacaoEmail', txtEmail.value)
                ipcRenderer.send('navegar', 'senha-codigo')
            }
        })
    } else {
        ipcRenderer.send('dialog', 'Insira seu e-mail')
    }
})

btnVoltar.addEventListener('click', e => {
    ipcRenderer.send('navegar', 'login')
})