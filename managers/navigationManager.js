const Controller = module.exports = {
    start: function (ipcMain, mainWindow) {
        ipcMain.on('navegar', (event, destino) => {
            console.log(destino);
            switch (destino) {
                case 'login':
                    mainWindow.loadFile('src/renderers/login/login.html')
                    break;
                case 'senha-recuperar':
                    mainWindow.loadFile('src/renderers/senha-recuperar/senha-recuperar.html')
                    break;
                case 'senha-codigo':
                    mainWindow.loadFile('src/renderers/senha-codigo/senha-codigo.html')
                    break;
                case 'senha-nova':
                    mainWindow.loadFile('src/renderers/senha-nova/senha-nova.html')
                    break;
                case 'menu-monitorar':
                    mainWindow.loadFile('src/renderers/menu-monitorar/menu-monitorar.html')
                    break;
                case 'menu-editar':
                    mainWindow.loadFile('src/renderers/menu-editar/menu-editar.html')
                    break;
                case 'menu-adicionar':
                    mainWindow.loadFile('src/renderers/menu-adicionar/menu-adicionar.html')
                    break;
                case 'menu-historico':
                    mainWindow.loadFile('src/renderers/menu-historico/menu-historico.html')
                    break;
                default:
                    mainWindow.loadFile('src/renderers/login/login.html')
            }
        })
    }
}