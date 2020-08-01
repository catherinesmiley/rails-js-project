const BASE_URL = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
})

function renderRandomWord() {
    let wordDisplay = document.querySelector("#word-display")
    fetch(`${BASE_URL}/words`)
    .then(resp => resp.json())
    .then(words => {
        // use map instead? filter?
        const bigWords = []
        for (let i = 0; i < words.length; i++) {
            let letters = words[i].name.split('')
            let letterCount = letters.length
            if (letterCount > 6) {
                bigWords.push(letters.join(''))
            }
        }
        let randomWord = bigWords[Math.floor(Math.random() * bigWords.length)]
        let wordsHTML =
            `
            <h1>${randomWord}</h1>
            `
        wordDisplay.innerHTML = wordsHTML
    })
}

function clearBody() {
    document.querySelector("#word-display").innerHTML = ""
    document.querySelector("#game-display").innerHTML = ""
    document.querySelector("#user-form-container").innerHTML = ""
    document.querySelector("#users-container").innerHTML = ""
}

function createUserForm() {
    clearBody()
    let userForm = document.getElementById("user-form-container")

    userForm.innerHTML += 
    `   
        <br>
        <form id="user-form">
            Username: <input type="text" id="username">
            <input type="submit" value="Create User">
        </form>
    `
    userForm.addEventListener("submit", userFormSubmission)
}

function userFormSubmission() {
    event.preventDefault();
    document.getElementById("user-form").innerHTML = ""
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
    renderGameStats()
    renderRandomWord()
    renderWordInput()
}

function renderGameStats() {
    gameDisplay = document.querySelector("#game-display")
    gameDisplay.innerHTML += 
    `
    Game Points: 0 / Total Words: 0
    <p>
    `
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
