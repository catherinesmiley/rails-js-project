let validWords

class Word {
    constructor(id, name, game_id) {
        this.id = id;
        this.name = name;
        this.game_id = game_id;
    }

    renderRandomWord() {
        let wordDisplay = document.querySelector("#word-display")
        let wordsHTML = 
        `
        <div id="big-word" data-id=${this.id}>
        <h1>${this.name}</h1>
        </div>
        `

        wordDisplay.innerHTML += wordsHTML
        validWords = fetchValidWords()
        console.log(validWords)
    }

    renderNewWord() {
        let wordsDisplay = document.querySelector("#user-words-display")
        let findWordCount = document.querySelector("#word-count")
        let wordCount = document.querySelector("#word-count").innerHTML
        let newWordCount = (parseInt(wordCount) + 1)
        let findGamePoints = document.querySelector("#game-points")
        let gamePoints = document.querySelector("#game-points").innerHTML
        let findUserPoints = document.querySelector("#user-points")
        let userPoints = document.querySelector("#user-points").innerHTML

        let letters = this.name.split('')
        let letterCount = letters.length
        let wordValue

        if (letterCount < 5) {
            wordValue = 1
        } else if (letterCount == 5) {
            wordValue = 2
        } else {
            wordValue = 3
        }
 
        let newGamePoints = (parseInt(gamePoints) + wordValue)
        let newUserPoints = (parseInt(userPoints) + wordValue)

        let words = validWords.map(function(element){
            return element.name
        })
        
        if (words.includes(this.name)) {
            wordsDisplay.innerHTML += 
            `   
            <ul>
            <li id="${this.game_id}">${this.name}</li>
            </ul>
            `
            
            findWordCount.innerHTML = newWordCount
            findGamePoints.innerHTML = newGamePoints
            findUserPoints.innerHTML = newUserPoints

        } else {
            alert("That is not a valid word!")
        }
        persistGameData()
    }

}