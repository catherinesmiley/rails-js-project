class User {
    constructor(id, username, points) {
        this.id = id;
        this.username = username;
        this.points = points;
    }

    newUserGreeting() {
        alert(`Welcome ${this.username}!`);
        document.querySelector("#user-form").innerHTML = ""
    }
}