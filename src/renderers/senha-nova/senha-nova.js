const ipcRenderer = require('electron').ipcRenderer

let inpNovaSenha = document.getElementById('inp-nova-senha'),
    inpRepetirSenha = document.getElementById('inp-repetir-nova-senha'),
    btnConfirmar = document.getElementById('btn-confirmar'),
    btnVoltar = document.getElementById('btn-voltar')

btnConfirmar.addEventListener('click', e => {
    if (isSenhaIgual()) {
        ipcRenderer.send('dialog', 'Senha modificada com sucesso')
        ipcRenderer.send('navegar', 'splash')
    }
    else {
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