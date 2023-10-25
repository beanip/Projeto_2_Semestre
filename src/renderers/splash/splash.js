const ipcRenderer = require('electron').ipcRenderer

let btnEntrar = document.getElementById('btn-entrar'),
    btnRecuperarSenha = document.getElementById('btn-recuperar-senha')

// Listeners
btnEntrar.addEventListener('click', e => {
    console.log('Clicou btnEntrar')
})

btnRecuperarSenha.addEventListener('click', e => {
    ipcRenderer.send('navegar', 'senha-recuperar')
})