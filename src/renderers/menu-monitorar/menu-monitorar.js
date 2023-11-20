const ipcRenderer = require('electron').ipcRenderer
const lixeiraController = require('../../../controllers/lixeiraController')
const { limparSessao, pegarUsuarioSessao } = require('../../base/js-base')

let pathImagem = '../../../assets/images/lixeira-';

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
        lixeiras.forEach(lixeira => {
            var innerHTML = ''
            var tempDIV = document.createElement('div');
            tempDIV.setAttribute('class', 'grid-item');
            innerHTML = innerHTML.concat(`<div class='header-item'> <div class='header-text'>` + lixeira.quantidadeOcupada + `%</div> <img class='imagem-lixeira' src='` + (pathImagem + pegarStatus(lixeira.quantidadeOcupada)) + `.png'></img></div>`)
            innerHTML = innerHTML.concat(`<div class='grid-text'>` + lixeira.localizacao + `</div>`)
            innerHTML = innerHTML.concat(`<div class='grid-text'>` + 'Tipo: ' + lixeira.identificacao + '</div>')
            innerHTML = innerHTML.concat(`<div class='grid-text'>` + 'Status: ' + pegarStatus(lixeira.quantidadeOcupada) + '</div>')
            innerHTML = innerHTML.concat(`<div class='grid-text'>` + 'Data: ' + new Date(lixeira.dataUltimaTroca).toLocaleDateString('pt-BR') + '</div>')
            tempDIV.innerHTML = innerHTML;
            gridContainer.appendChild(tempDIV);
        });
    }
})

function pegarStatus(quantidadeOcupada) {
    switch (true) {
        case quantidadeOcupada < 25: return 'Vazia'
        case quantidadeOcupada < 70: return 'Metade'
        default: return 'Cheia'
    }
}

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