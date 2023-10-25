const ipcRenderer = require('electron').ipcRenderer

let inpNovaSenha = document.getElementById('inp-nova-senha'),
    inpRepetirSenha = document.getElementById('inp-repetir-nova-senha'),
    btnConfirmar = document.getElementById('btn-confirmar')

btnConfirmar.addEventListener('click', e => {
    if (isSenhaIgual())
        ipcRenderer.send('navegar', 'splash')
    else
        console.log('Senhas diferentes');
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