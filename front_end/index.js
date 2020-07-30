const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
    // createUserForm
})

function renderRandomWord() {
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

function createUserForm() {
    clearBody()
    let userForm = document.getElementById("user-form")

    userForm.innerHTML += 
    `   <br>
        <form>
            Username: <input type="text" id="username">
            <input type="submit" value="Create User">
        </form>
    `
    userForm.addEventListener("submit", userFormSubmission)
}

function userFormSubmission() {
    event.preventDefault();
    let username = document.getElementById("username").value
    let user = {
        username: username, 
        points: 0
    }

    fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    
    
}

document.querySelector("#new-game").addEventListener("click", renderRandomWord)
document.querySelector("#user-bttn").addEventListener("click", createUserForm)
