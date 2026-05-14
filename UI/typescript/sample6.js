"use strict";
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toJson() {
        return JSON.stringify(this);
    }
}
let user = new User("Alice", 30);
console.log(user.toJson());
