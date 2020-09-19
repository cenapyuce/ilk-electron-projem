const video = document.getElementById("video")
const pauseandplay = document.getElementById("pauseandplay")
const voice = document.getElementById("voice")
pauseandplay.addEventListener("click", () => {
    if(video.paused === true) {
        video.play()
        pauseandplay.innerText = "Pause"
    } else if(video.paused === false) {
        video.pause()
        pauseandplay.innerText = "Play"
    }
})

setInterval(async() => {
    if(voice.valueAsNumber === 100) {video.volume = 1} else video.volume = `0.${voice.valueAsNumber}`
})

require("./MainWindow")