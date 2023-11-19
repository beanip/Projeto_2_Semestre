const { app, BrowserWindow, session, Tray, Menu, ipcMain } = require('electron')
const windowStateKeeper = require('electron-window-state')
const navigationManager = require('./managers/navigationManager')
const emailManager = require('./managers/emailManager')
const trayManager = require('./managers/trayManager')
const database = require('./database/database')
const dialogManager = require('./managers/dialogManager')

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
    minHeight: 750,
    maximizable: true,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: { color: '#2f3241', symbolColor: '#74b1be' },
    webPreferences: { contextIsolation: false, nodeIntegration: true }
  })

  state.manage(mainWindow)

  mainWindow.loadFile('src/renderers/login/login.html')
  //mainWindow.loadFile('src/renderers/senha-recuperar/senha-recuperar.html')

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  tray = new Tray('assets/images/trayTemplate@2x.png')

  trayManager.createTray(tray, Menu, mainWindow)
  navigationManager.start(ipcMain, mainWindow)
  dialogManager.start(ipcMain,)
  emailManager.start(ipcMain, nodemailer)
  database.abrirConexao()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    database.fecharConexao()
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null)
    createWindow()
})