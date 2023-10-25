const Controller = module.exports = {
    createTray: function (tray, Menu, mainWindow) {
        let trayMenu = Menu.buildFromTemplate([
            { role: 'quit' }
        ])

        tray.setToolTip('Gate5 App para lixeiras')
        tray.on('click', e => { mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show() })
        tray.setContextMenu(trayMenu)
    }
}