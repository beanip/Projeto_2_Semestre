const { app, BrowserWindow, Tray, Menu, ipcMain } = require('electron')
const windowStateKeeper = require('electron-window-state')
const navigationController = require('./controllers/navigationController')
const emailController = require('./controllers/emailController')
const trayController = require('./controllers/trayController')

var nodemailer = require('nodemailer')

let mainWindow, tray

function createWindow() {

  let state = windowStateKeeper({
    defaultWidth: 1100, defaultHeight: 700
  })

  mainWindow = new BrowserWindow({
    x: state.x, y: state.y,
    width: state.width, height: state.height,
    minWidth: 1100,
    minHeight: 500,
    maximizable: true,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: { color: '#2f3241', symbolColor: '#74b1be' },
    webPreferences: { contextIsolation: false, nodeIntegration: true }
  })

  state.manage(mainWindow)

  mainWindow.loadFile('src/renderers/splash/splash.html')

 // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  tray = new Tray('assets/images/trayTemplate@2x.png')

  trayController.createTray(tray, Menu, mainWindow)
  navigationController.start(ipcMain, mainWindow)
  emailController.start(ipcMain, mainWindow, nodemailer)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})

app.on('activate', () => {
  if (mainWindow === null)
    createWindow()
})