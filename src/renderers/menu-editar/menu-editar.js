const ipcRenderer = require('electron').ipcRenderer

let btnMonitorar = document.getElementById('btn-monitorar'),
    btnHistorico = document.getElementById('btn-historico'),
    btnAdicionar = document.getElementById('btn-adicionar'),
    btnEditar = document.getElementById('btn-editar')

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