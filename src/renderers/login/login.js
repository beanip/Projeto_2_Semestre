const ipcRenderer = require('electron').ipcRenderer
const loginController = require('../../../controllers/loginController')

let btnEntrar = document.getElementById('btn-entrar'),
    btnRecuperarSenha = document.getElementById('btn-recuperar-senha'),
    inpEmail = document.getElementById('inp-email'),
    inpSenha = document.getElementById('inp-senha')

// Listeners
btnEntrar.addEventListener('click', e => {
    if (inpEmail.value && inpSenha.value) {

        loginController.get(inpEmail.value, (err, result) => {
            if (err)
                ipcRenderer.send('dialog', 'Algo deu errado, tente novamente.')
            else if (!result || result.length === 0)
                ipcRenderer.send('dialog', 'Email não existente')
            else {
                if (result[0].senha === inpSenha.value)
                    ipcRenderer.send('navegar', 'menu-monitorar')
                else
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