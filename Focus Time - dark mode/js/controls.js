
export default function Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    screen1,
    screen2,
    body
}) {

function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
}

function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
}

function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
}

function changeScreenLight() {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
    body.classList.toggle('dark-mode')
}

function changeScreenDark() {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    body.classList.toggle('dark-mode')
}

function getMinutes() {
    let newMinutes = prompt('Quantos minutos você deseja?')
    if(!newMinutes) {
        return false
    }

    return newMinutes
}
    return {
        play,
        pause,
        reset,
        getMinutes,
        changeScreenLight,
        changeScreenDark
    }
}