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
        for (const word of words) {
            new Word(word.id, word.name, word.game_id)
            let letters = word.name.split('')
            let letterCount = letters.length
            if (letterCount > 6) {
                bigWords.push(letters.join('')) 
            }
        }

        let randomWord = bigWords[Math.floor(Math.random() * bigWords.length)]

        let wordsHTML =
            `
            <div id="big-word">
            <h1>${randomWord}</h1>
            </div>
            `
        wordDisplay.innerHTML = wordsHTML

        fetchValidWords() 

    })
}

function clearBody() {
    document.querySelector("#word-display").innerHTML = ""
    document.querySelector("#game-display").innerHTML = ""
    document.querySelector("#user-form-container").innerHTML = ""
    // document.querySelector("#users-container").innerHTML = ""
    // need to clear after viewing all users, just not after creating new - add another div?
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
    // clear form after submission
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
    
function startNewGame() {
    clearBody()
    createGame()
    // renderGameStats()
    renderRandomWord()
    renderWordInput()
}

function createGame() {
    // have to have a user to start a game
    let currentUser = document.getElementById("current-user")
    let currentUserId = currentUser.getAttribute('data-id')
    fetch(`${BASE_URL}/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            user_id: currentUserId
        })
    })
    .then(resp => resp.json())
    .then(game => {
        let g = new Game(game.id, game.user_id)
        g.renderGame()
    })

}

// function renderGameStats() {
//     gameDisplay = document.querySelector("#game-display")
//     gameDisplay.innerHTML += 
//     // add game id to div
//     `
//     <div id="game-id">
//     Game Points: 0 / Total Words: 0
//     <p>
//     </div>
//     `
// }

function wordFormSubmission() {
    event.preventDefault();

    let name = document.getElementById("word-name").value
    // let game_id = 
    let word = {
        name: name
        // game_id: game_id
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

    document.getElementById("word-form").reset();

}

function fetchValidWords() {
    let bigWord = document.querySelector("#big-word").innerText
    let bigWordValidWords = []
    fetch(`${BASE_URL}/valid_words`)
    .then(resp => resp.json())
    .then(validWords => {
        for (const validWord of validWords) {
            let vw = new ValidWord(validWord.id, validWord.name, validWord.word_id)
            if (vw.word_id == bigWord.id) {
                bigWordValidWords.push(vw.name)
            }
            // validBigWords includes all valid words
        }
        console.log(bigWordValidWords)
    })
}

document.querySelector("#new-game").addEventListener("click", startNewGame)
document.querySelector("#user-bttn").addEventListener("click", createUserForm)
document.querySelector("#all-users-bttn").addEventListener("click", fetchUsers)
