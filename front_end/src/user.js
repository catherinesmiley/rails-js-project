class User {
    constructor(id, username, points) {
        this.id = id;
        this.username = username;
        this.points = points;
    }

    newUserGreeting() {
        // render error message if username is blank
        let userContainer = document.querySelector("#users-container")
        if (this.username === "") {
            userContainer.innerHTML +=
            `
            <div id="current-user" data-id=${this.id}>
            <h3>${this.username} - ${this.points} points</h3>
            </div>
            `
        } else {
            alert("Username can't be blank!")
        }

    }

}