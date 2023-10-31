const ipcRenderer = require('electron').ipcRenderer

let btnValidar = document.getElementById('btn-validar'),
    btnVoltar = document.getElementById('btn-voltar'),
    txtEmail = document.getElementById('inp-email')

btnValidar.addEventListener('click', e => {
    ipcRenderer.send('enviarCodigoRecuperacaoEmail', txtEmail.value)
    ipcRenderer.send('navegar', 'senha-codigo')
})

btnVoltar.addEventListener('click', e => {
    ipcRenderer.send('navegar', 'login')
})