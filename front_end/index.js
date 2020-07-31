const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
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
    document.querySelector("#game-display").innerHTML = ""
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
    .then(user => {
        let u = new User(user.id, user.username, user.points)
        u.newUserGreeting()
    })
}

function fetchUsers() {
    clearBody()
    let usersContainer = document.querySelector("#users-container")
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
        for (const user of users) {
            let u = new User(user.id, user.username, user.points)
            usersContainer.innerHTML +=
            `
            <ul>
            <li> Username: ${u.username} - Points: ${u.points} </li>
            </ul>
            `
        }
    })
}

function renderWordInput() {
    // rewrite function name?
    let gameDisplay = document.querySelector("#game-display")

    gameDisplay.innerHTML += 
    `   <div id="word-form-container">
        <form id="word-form">
            Type your words here: <input type="text" id="word-name" onfocus="this.value=''">
            <input type="submit" value="Submit Word">
        </form>
        </div>
        <div id="user-words-display">

        </div>
    `

    let wordForm = document.querySelector("#word-form-container")
    wordForm.addEventListener("submit", wordFormSubmission)

}

function createGame() {
    clearBody()
    renderRandomWord()
    renderWordInput()

}

function wordFormSubmission() {
    event.preventDefault();

    let name = document.getElementById("word-name").value
    let word = {
        name: name
    }
    // associate it with the current game

    fetch(`${BASE_URL}/words`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(word)
    })
    .then(resp => resp.json())
    .then(word => {
        let w = new Word(word.id, word.name, word.game_id)
        w.renderNewWord() 
    })

}

document.querySelector("#new-game").addEventListener("click", createGame)
document.querySelector("#user-bttn").addEventListener("click", createUserForm)
document.querySelector("#all-users-bttn").addEventListener("click", fetchUsers)
