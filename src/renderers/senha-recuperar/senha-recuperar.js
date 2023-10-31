const ipcRenderer = require('electron').ipcRenderer

let btnValidar = document.getElementById('btn-validar'),
    btnVoltar = document.getElementById('btn-voltar'),
    txtEmail = document.getElementById('inp-email')

btnValidar.addEventListener('click', e => {
    console.log('Clicou btnValidar: ' + txtEmail.value);
    if (txtEmail.value === null || txtEmail.value.trim() === "") {
        console.log('Email vazio');
    } else {
        ipcRenderer.send('enviarCodigoRecuperacaoEmail', txtEmail.value)
        console.log('Entrou btnValidar ')
        ipcRenderer.send('navegar', 'senha-codigo')
    }
})

btnVoltar.addEventListener('click', e => {
    ipcRenderer.send('navegar', 'login')
})