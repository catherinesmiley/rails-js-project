class User {
    constructor(id, username, points) {
        this.id = id;
        this.username = username;
        this.points = points;
    }

    newUserGreeting() {
        // render error message if username is blank
        console.log("hi")
        let userContainer = document.querySelector("#users-container")
        userContainer.innerHTML +=
        `
        <div id="user-${this.id}">
        <h3>${this.username} - ${this.points} points</h3>
        </div>
        `
    }

}