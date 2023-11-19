const ipcRenderer = require('electron').ipcRenderer
const { limparSessao } = require('../../base/js-base')

let btnMonitorar = document.getElementById('btn-monitorar'),
    btnHistorico = document.getElementById('btn-historico'),
    btnAdicionar = document.getElementById('btn-adicionar'),
    btnEditar = document.getElementById('btn-editar'),
    btnLogout = document.getElementById('btn-logout')

//if (true)
//btnEditar.style.visibility = "hidden"

btnMonitorar.addEventListener('click', e => {
    ipcRenderer.send('navegar', 'menu-monitorar')
})

btnHistorico.addEventListener('click', e => {
    ipcRenderer.send('navegar', 'menu-historico')
})

btnAdicionar.addEventListener('click', e => {
    ipcRenderer.send('navegar', 'menu-adicionar')
})

btnEditar.addEventListener('click', e => {
    ipcRenderer.send('navegar', 'menu-editar')
})

btnLogout.addEventListener('click', e => {
    limparSessao()
    ipcRenderer.send('navegar', 'login')
})