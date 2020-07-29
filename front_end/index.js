const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
    renderFirstWord()
})



function renderFirstWord() {
    // change to renderBigWords/make separate function?
    // change to renderRandomWord?
    // add clear form/page function
    let bigWordDisplay = document.querySelector("#big-word-display")
    fetch(`${BASE_URL}/big_words`)
    .then(resp => resp.json())
    .then(bigWords => {
        let bigWordsHTML =
            `
            <h1>${bigWords[0].name}</h1>
            `
        bigWordDisplay.innerHTML = bigWordsHTML
        })
    }

function createNewGame() {
    // location.reload(); // check to see if this works
}

document.getElementById("new-game").addEventListener("click", console.log("hi"))
