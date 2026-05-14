interface Json{
    toJson(): string;
}

class User implements Json{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    toJson(): string{
        return JSON.stringify(this);
    }
}

let user = new User("Alice", 30);
console.log(user.toJson());
