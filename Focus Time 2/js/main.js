import  Controls from './controls.js'
import Timer from './timer.js'
import Sounds from './sounds.js'
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonAdd,
    buttonRemove,
    soundFlorest,
    soundRain,
    soundCoffee,
    soundFire,
    minutesDisplay,
    secondsDisplay
} from './elements.js'

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sounds()

buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countDown()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.holdTimer()
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
})

buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()

    if(!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})

buttonAdd.addEventListener('click', function() {
    timer.addMinutes()
})

buttonRemove.addEventListener('click', function() {
    timer.removeMinutes()
})

soundFlorest.addEventListener('click', function() {
    sound.florestButton()
})

soundRain.addEventListener('click', function() {
    sound.rainButton()
})

soundCoffee.addEventListener('click', function() {
    sound.coffeeButton()
})

soundFire.addEventListener('click', function() {
    sound.fireButton()
})
