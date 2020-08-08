class User {
    constructor(id, username, points) {
        this.id = id;
        this.username = username;
        this.points = points;
    }

    newUserGreeting() {
        // render error message if username is blank
        let userContainer = document.querySelector("#users-container")
        userContainer.innerHTML +=
        `
        <div id="current-user" data-id=${this.id}>
        <h3 id="user-id">${this.username}</h3>
        <h3 id="user-points">${this.points} points</h3>
        </div>
        `
    }

}