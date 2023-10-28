const ipcRenderer = require('electron').ipcRenderer
const loginController = require('../../../controllers/loginController')

let btnEntrar = document.getElementById('btn-entrar'),
    btnRecuperarSenha = document.getElementById('btn-recuperar-senha')

// Listeners
btnEntrar.addEventListener('click', e => {
    console.log('Clicou btnEntrar')

 //   loginController.create('123123', 'tetete', (loginId) => {
//        console.log(loginId);
//    })
   
    //  ipcRenderer.send('navegar', 'menu-monitorar')
})

btnRecuperarSenha.addEventListener('click', e => {
    console.log('Clicou btnRecuperarSenha');
    ipcRenderer.send('navegar', 'senha-recuperar')
})