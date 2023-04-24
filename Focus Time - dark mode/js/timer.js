export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function holdTimer() {
        clearTimeout(timerTimeOut)
    }

    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
        secondsDisplay.textContent = String(seconds).padStart(2, "0");
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countDown() {
        timerTimeOut = setTimeout(function (){
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)

            updateDisplay(minutes, 0)

            if (minutes <= 0 && seconds <= 0) {
                updateDisplay()
                resetControls()
                return
            }
            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            countDown()
        } ,1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function addMinutes() {
        ++minutes
        updateDisplay(minutes, secondsDisplay.textContent)
    }

    function removeMinutes() {
        --minutes
        updateDisplay(minutes, secondsDisplay.textContent)
    }

    return {
        countDown,
        reset,
        updateDisplay,
        updateMinutes,
        holdTimer,
        addMinutes,
        removeMinutes
    }
}