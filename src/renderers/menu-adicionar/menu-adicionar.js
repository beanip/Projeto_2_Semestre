const ipcRenderer = require('electron').ipcRenderer
const lixeiraController = require('../../../controllers/lixeiraController')
const { limparSessao, pegarUsuarioSessao } = require('../../base/js-base')

let btnMonitorar = document.getElementById('btn-monitorar'),
    btnHistorico = document.getElementById('btn-historico'),
    btnAdicionar = document.getElementById('btn-adicionar'),
    btnEditar = document.getElementById('btn-editar'),
    btnLogout = document.getElementById('btn-logout'),
    btnSelecaoAdicionar = document.getElementById('btn-selecao-adicionar'),
    inpTipo = document.getElementById('inp-tipo'),
    inpLocalizacao = document.getElementById('inp-localizacao')

btnSelecaoAdicionar.addEventListener('click', e => {
    lixeiraController.create(
        inpTipo.value,
        inpLocalizacao.value,
        pegarUsuarioSessao().idusuario,
        (sucesso) => {
            if (sucesso) {
                ipcRenderer.send('dialog', 'Lixeira cadastrada com sucesso')
            } else {
                ipcRenderer.send('dialog', 'Algo deu errado')
            }

            inpTipo.value = ''
            inpLocalizacao.value = ''
        }
    )
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