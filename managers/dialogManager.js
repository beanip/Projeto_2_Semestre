const dialog = require('electron').dialog

const Controller = module.exports = {
    start: function (ipcMain, mainWindow) {
        ipcMain.on('dialog', (event, message) => {
            console.log(message)
            
            const options = {
                type: 'question',
                buttons: ['OK'],
                defaultId: 2,
                title: 'Ops',
                message: message
              }

            dialog.showMessageBox(null, options);
        })
    }
}