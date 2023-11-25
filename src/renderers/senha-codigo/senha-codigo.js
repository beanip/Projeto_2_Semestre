const ipcRenderer = require('electron').ipcRenderer

let inpCodigo = document.getElementById('inp-codigo'),
    btnValidar = document.getElementById('btn-validar'),
    btnVoltar = document.getElementById('btn-voltar')

btnValidar.addEventListener('click', async e => {
    const codigo = await ipcRenderer.invoke('pegarCodigoRecuperacaoEmail')

    if (isCodigoValido(inpCodigo.value, codigo))
        ipcRenderer.send('navegar', 'senha-nova')
    else
        console.log('Esse código é inválido')
})

function isCodigoValido(codigoEmail, codigoDigitado) {
    if (codigoEmail.localeCompare(codigoDigitado) == 0)
        return true
    else
        return false
}

btnVoltar.addEventListener('click', e => {
    ipcRenderer.send('navegar', 'login')
})