class Word {
    constructor(id, name, game_id) {
        this.id = id;
        this.name = name;
        this.game_id = game_id;
    }

    renderNewWord() {
        let wordsDisplay = document.querySelector("#user-words-display")
        wordsDisplay.innerHTML += 
        `
        <ul>
        <li id="${this.game_id}">${this.name}</li>
        </ul>
        `
    }
    // game_id is undefined

}