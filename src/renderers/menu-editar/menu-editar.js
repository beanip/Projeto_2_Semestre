const ipcRenderer = require('electron').ipcRenderer
const { limparSessao, pegarUsuarioSessao } = require('../../base/js-base')
const lixeiraController = require('../../../controllers/lixeiraController')

let btnMonitorar = document.getElementById('btn-monitorar'),
    btnHistorico = document.getElementById('btn-historico'),
    btnAdicionar = document.getElementById('btn-adicionar'),
    btnEditar = document.getElementById('btn-editar'),
    btnLogout = document.getElementById('btn-logout'),
    dropDownList = document.getElementById('drop-down-list'),
    btnSelecionarEditar = document.getElementById('btn-selecao-editar'),
    inpTipo = document.getElementById('inp-tipo'),
    inpLocalizacao = document.getElementById('inp-localizacao')


let globalLixeiras = []

popularDropDownList()

function popularDropDownList() {
    dropDownList.innerHTML = ''
    lixeiraController.get(pegarUsuarioSessao().idusuario, (err, lixeiras) => {
        if (err) {
            console.log(err);
        } else {
            globalLixeiras = lixeiras
            lixeiras.forEach(function (lixeira, index) {
                var innerHTML = ''
                var tempDIV = document.createElement('option');
                innerHTML = innerHTML.concat(`<option value='` + index + `'>` + lixeira.localizacao + `</option>`)
                tempDIV.innerHTML = innerHTML;
                dropDownList.appendChild(tempDIV);
            });
        }
    })
}

btnSelecionarEditar.addEventListener('click', e => {
    let lixeira = pegarLixeiraDropDown()

    if (inpTipo.value && inpLocalizacao.value) {
        lixeiraController.edit(lixeira.idlixeira, inpTipo.value, inpLocalizacao.value, (sucesso) => {
            if (sucesso) {
                ipcRenderer.send('dialog', 'Lixeira editada com sucesso')
                popularDropDownList()
            }
            else
                ipcRenderer.send('dialog', 'Algo deu errado')
        })
    } else
        ipcRenderer.send('dialog', 'Preencha todos os campos')
})

function pegarLixeiraDropDown() {
    return globalLixeiras.find(function (lixeira) {
        return lixeira.localizacao === dropDownList.value
    })
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