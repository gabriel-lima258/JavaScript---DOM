// Verification fuction is a number or not

export function notNumber(value) {
    return isNaN(value) || value == ""
}

// IMC function

export function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

