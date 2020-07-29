const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
    renderFirstWord()
})

function renderFirstWord() {
    // add clear form function
    let bigWordDisplay = document.querySelector("#big-word-display")
    fetch(`${BASE_URL}/big_words`)
    console.log(`${BASE_URL}/big_words`)
}