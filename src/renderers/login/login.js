const ipcRenderer = require('electron').ipcRenderer
const loginController = require('../../../controllers/loginController')

let btnEntrar = document.getElementById('btn-entrar'),
    btnRecuperarSenha = document.getElementById('btn-recuperar-senha'),
    inpEmail = document.getElementById('inp-email'),
    inpSenha = document.getElementById('inp-senha')

// Listeners
btnEntrar.addEventListener('click', e => {
    console.log('Clicou btnEntrar')

    if (inpEmail.value && inpSenha.value) {
        loginController.isLoginCorrect(inpEmail.value, inpSenha.value, (loginPermited) => {
            console.log('Igual: ' + loginPermited)
        })
    } else {
        console.log('Campo vazio')
    }


    //  ipcRenderer.send('navegar', 'menu-monitorar')
})

btnRecuperarSenha.addEventListener('click', e => {
    console.log('Clicou btnRecuperarSenha');
    ipcRenderer.send('navegar', 'senha-recuperar')
})