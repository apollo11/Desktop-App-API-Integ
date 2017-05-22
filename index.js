/*
 *handle setupevents as quickly as possible
 */
const setupEvents = require('./installers/setupEvents');
if (setupEvents.handleSquirrelEvent()) {
  /*
   *squirrel event handled and app will exit in 1000ms, so don't do anything else
   */
  return;
}

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const options = { "extraHeaders": "pragma: no-cache\n" };

// Enable flash plugin
if (process.platform == 'win32') {
  ppapi_flash_path = path.join(__dirname, '/../app.asar.unpacked/plugins/pepflashplayer64.dll');
} else if (process.platform == 'linux') {
  ppapi_flash_path = path.join(__dirname, '/../app.asar.unpacked/plugins/libpepflashplayer.so');
} else if (process.platform == 'darwin') {
  ppapi_flash_path = path.join(__dirname, '/../app.asar.unpacked/plugins/PepperFlashPlayer.plugin');
} else { }

app.commandLine.appendSwitch('ppapi-flash-path', ppapi_flash_path);

// Specify flash path, supposing it is placed in the same directory with main.js.
// let pluginName;
// switch (process.platform) {
//   case 'win32':
//     pluginName = './plugins/pepflashplayer.dll';
//     break;
//   case 'darwin':
//     pluginName = './plugins/PepperFlashPlayer.plugin';
//     break;
//   case 'linux':
//     pluginName = './plugins/libpepflashplayer.so';
//     break
// }
// app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName));


/*
 *Keep a global reference of the window object, if you don't, the window will
 *be closed automatically when the JavaScript object is garbage collected.
 */
let win;

function createWindow() {
  // console.log(path.join(__dirname, '/../app.asar.unpacked/plugins/PepperFlashPlayer.plugin'));
  /*
   *Create the browser window.
   */
  win = new BrowserWindow({
    resizable: true,
    width: 1400,
    height: 900,
    'minHeight': 800,
    'minWidth': 900,
    frame: true,
    toolbar: false,
    //kiosk: true,
    backgroundColor: '#111111',
    icon: path.join(__dirname, '/build/icons/64x64.png'),
    'webPreferences': {
      'plugins': true,
      'web-security': false,
      'experimentalFeatures': true
    },
    show: false,
  });

  win.setMenuBarVisibility(false);
  win.setAutoHideMenuBar(true);

  win.setMenu(null);
  /*
   *win.setIgnoreMouseEvents(true)
   *and load the index.html of the app.
   */
  win.loadURL('http://desktopapp.orange88.com');
  // win.loadURL('http://localhost:4200');

  /*
   *Open the DevTools.
   */
  // win.webContents.openDevTools();

  win.webContents.reloadIgnoringCache();
  /*
   *Emitted when the window is closed.
   */
  win.on('closed', () => {
    /*
     *Dereference the window object, usually you would store windows
     *in an array if your app supports multi windows, this is the time
     *when you should delete the corresponding element.
     */
    win = null
  })

  win.on('ready-to-show', function() {
      win.show();
      win.focus();
  });
}

/*
 *This method will be called when Electron has finished
 *initialization and is ready to create browser windows.
 *Some APIs can only be used after this event occurs.
 */
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  /*
   *On macOS it is common for applications and their menu bar
   *to stay active until the user quits explicitly with Cmd + Q
   */
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  /*
   *On macOS it's common to re-create a window in the app when the
   *dock icon is clicked and there are no other windows open.
   */
  if (win === null) {
    createWindow()
  }
})
