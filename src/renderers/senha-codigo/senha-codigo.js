const ipcRenderer = require('electron').ipcRenderer

let inpCodigo = document.getElementById('inp-codigo'),
    btnValidar = document.getElementById('btn-validar'),
    btnVoltar = document.getElementById('btn-voltar')

btnValidar.addEventListener('click', async e => {
    const codigo = await ipcRenderer.invoke('pegarCodigoRecuperacaoEmail');

    console.log(codigo);

    if (isCodigoValido(inpCodigo.value, codigo))
        ipcRenderer.send('navegar', 'senha-nova')
    else
        console.log('Codigos diferentes');
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