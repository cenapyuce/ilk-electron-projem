const electron = require("electron")
const {ipcRenderer} = electron;
ipcRenderer.on("video", (e,startorstop) => {
    if(startorstop === "start") {
        video.play()
        pauseandplay.innerText = "Pause"
    } else if (startorstop === "stop") {
        video.pause()
        pauseandplay.innerText = "Play"
    }
})