const electron = require('electron') // Electron tanımladım
const path = require('path') // path tanımladım
const fs = require("fs")
//Node Api alma
const root = fs.readdirSync('/')

const {app,BrowserWindow,Menu} = electron
function yeniPencere () {  // Tarayıcı da pencere oluşturur
    const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
}
    })
     
    // Tarayıcı da index.html açar
win.loadFile("index.html")
}

const mainMenuTemplate = [
    {
         label: "Video",
         submenu : [
             {
                 label: "Start",
                 click(item, focusedWindow) {
                    focusedWindow.send("video","start")
                }
             },
             {
                 label: "Stop",
                 click(item, focusedWindow) {
                    focusedWindow.send("video","stop")
                 }
             }
         ]
    },
    {
        label: "Developer",
        submenu : [
            {
                label: "Developer Tool1",
                click(item, focusedWindow) {
                    focusedWindow.openDevTools();
                 }
            }
        ]
    }
    ]

const MainMenu = Menu.buildFromTemplate(mainMenuTemplate) 

Menu.setApplicationMenu(MainMenu)
app.addRecentDocument('Users\User\OneDrive\Masaüstü\electron application')
app.clearRecentDocuments()

app.whenReady().then(() => {
    yeniPencere()


// Darwin ile electron tarayıcısını kapatma
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0 ) yeniPencere()
  })
})
