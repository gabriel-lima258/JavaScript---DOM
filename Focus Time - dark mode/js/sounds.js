export default function () {
    const soundFlorest = new Audio("./sounds/Floresta.wav")
    const soundRain = new Audio("./sounds/Chuva.wav")
    const soundCoffee = new Audio("./sounds/Cafeteria.wav")
    const soundFire = new Audio("./sounds/Lareira.wav")

    soundFlorest.loop = true
    soundRain.loop = true
    soundCoffee.loop = true
    soundFire.loop = true

    function florestButton() {
        soundFlorest.play()
        soundRain.pause()
        soundCoffee.pause()
        soundFire.pause()
    }
    function rainButton() {
        soundFlorest.pause()
        soundRain.play()
        soundCoffee.pause()
        soundFire.pause()
    }
    function coffeeButton() {
        soundFlorest.pause()
        soundRain.pause()
        soundCoffee.play()
        soundFire.pause()
    }
    function fireButton() {
        soundFlorest.pause()
        soundRain.pause()
        soundCoffee.pause()
        soundFire.play()
    }

    return {
        florestButton,
        rainButton,
        coffeeButton,
        fireButton
    }


}