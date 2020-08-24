class User {
    constructor(id, username, points) {
        this.id = id;
        this.username = username;
        this.points = points;
        User.allUsers.push(this)
    }

    displayUser() {
        let userContainer = document.querySelector("#users-container")
        userContainer.innerHTML +=
        `
        <div id="current-user" data-id=${this.id}>
        <h3 id="user-id">${this.username}</h3>
        <h3 id="user-points">${this.points} points</h3>
        </div>
        `
    }

    static allUsers = []
    // can use static methods to reduce number of fetch requests

}