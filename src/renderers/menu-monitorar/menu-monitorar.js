const ipcRenderer = require('electron').ipcRenderer
const lixeiraController = require('../../../controllers/lixeiraController')
const { limparSessao, pegarUsuarioSessao } = require('../../base/js-base')

let btnMonitorar = document.getElementById('btn-monitorar'),
    btnHistorico = document.getElementById('btn-historico'),
    btnAdicionar = document.getElementById('btn-adicionar'),
    btnEditar = document.getElementById('btn-editar'),
    btnLogout = document.getElementById('btn-logout'),
    gridContainer = document.getElementById('grid-container')

//if (pegarUsuarioSessao().isAdmin == 1)
//    btnEditar.style.visibility = "hidden"

lixeiraController.get(pegarUsuarioSessao().idusuario, (err, lixeiras) => {
    if (err) {
        console.log(err);
    } else {
       console.log(lixeiras);
    }
})

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