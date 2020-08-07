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
    }

    renderNewWord() {
        let wordsDisplay = document.querySelector("#user-words-display")
        let findWordCount = document.querySelector("#word-count")
        let wordCount = document.querySelector("#word-count").innerHTML
        let newWordCount = (parseInt(wordCount) + 1)

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

        } else {
            alert("That is not a valid word!")
        }
    }

}