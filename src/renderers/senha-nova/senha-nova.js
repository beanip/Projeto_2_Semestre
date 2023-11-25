const ipcRenderer = require('electron').ipcRenderer
const { pegarEmailSessao } = require('../../base/js-base')
const usuarioController = require('../../../controllers/usuarioController')

let inpNovaSenha = document.getElementById('inp-nova-senha'),
    inpRepetirSenha = document.getElementById('inp-repetir-nova-senha'),
    btnConfirmar = document.getElementById('btn-confirmar'),
    btnVoltar = document.getElementById('btn-voltar')

btnConfirmar.addEventListener('click', e => {
    if (isSenhaIgual()) {
        usuarioController.updateSenha(inpNovaSenha.value, pegarEmailSessao(), sucesso => {
            if (sucesso === true) {
                ipcRenderer.send('dialog', 'Senha modificada com sucesso')
                ipcRenderer.send('navegar', 'splash')
            } else {
                ipcRenderer.send('dialog', 'Ocorreu um erro, tente novamente.')
            }
        })
    } else {
        ipcRenderer.send('dialog', 'As senhas precisam ser iguais. Confirme novamente.')
        inpNovaSenha.value = ''
        inpRepetirSenha.value = ''
    }
})

function isSenhaIgual() {
    if (
        inpNovaSenha.value.localeCompare('') != 0 &&
        inpRepetirSenha.value.localeCompare('') != 0 &&
        inpNovaSenha.value.localeCompare(inpRepetirSenha.value) == 0)
        return true
    else
        return false
}

btnVoltar.addEventListener('click', e => {
    ipcRenderer.send('navegar', 'login')
})