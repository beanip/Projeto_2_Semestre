const Controller = module.exports = {
    start: function (ipcMain, mainWindow) {
        ipcMain.on('navegar', (event, destino) => {
            console.log(destino);
            switch (destino) {
                case 'splash':
                    mainWindow.loadFile('src/renderers/splash/splash.html')
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
                default:
                    mainWindow.loadFile('src/renderers/splash/splash.html')
            }
        })
    }
}