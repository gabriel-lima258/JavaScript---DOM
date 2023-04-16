const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("#btnReset")
const openBiscuit = document.querySelector("#openBiscuit")
let i = 0

let phrases = [
    "Nenhum desafio vai ser impossível de superar, se tiver paciência e determinação. Tudo vai dar certo.",
    "Está enganado quem pensa que o meu coração cheio de cicatrizes não tem forças para prosseguir.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "O caminho para realizar nossos sonhos fica menor, a cada passo de superação que damos",
    "Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.",
    "A persistência é o caminho do êxito.",
    "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
    "Só existe um êxito: a capacidade de levar a vida que se quer.",
    "Creia em si, mas não duvide sempre dos outros.",
    "Talento é dom, é graça. E sucesso nada tem a ver com sorte, mas com determinação e trabalho."
]   

openBiscuit.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', handleResetClick)

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    
    document
            .querySelector(".screen2 p")
            .innerText = phrases[i] 

}
function handleResetClick() {
    toggleScreen()
    i++   
}