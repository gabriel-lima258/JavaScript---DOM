// Variables

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// imports

import { Modal } from './modal.js'
import { alertError } from './alert-error.js'
import { IMC, notNumber } from './utils.js'

// Event call submit

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()

form.onsubmit = (event) => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if (showAlertError) {
        cleanMessage(weight, height)
        alertError.open()
        return;
    }

    cleanMessage(weight, height)
    alertError.close()

    const result = IMC(weight, height)
    displayResultMessage(result)
}

// Message IMC function

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

// Clean message

export function cleanMessage () {
    inputWeight.value = ""
    inputHeight.value = ""
}


