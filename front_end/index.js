const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {

})

function renderRandomWord() {
    clearBody()
    let wordDisplay = document.querySelector("#word-display")
    fetch(`${BASE_URL}/words`)
    .then(resp => resp.json())
    .then(words => {
        let randomWord = words[Math.floor(Math.random() * words.length)]
        let wordsHTML =
            `
            <h1>${randomWord.name}</h1>
            `
        wordDisplay.innerHTML = wordsHTML
        })
    }

function clearBody() {
    document.querySelector("#word-display").innerHTML = ""
}

document.querySelector("#new-game").addEventListener("click", renderRandomWord)
