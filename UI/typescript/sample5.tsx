interface Person{
    name: string;
    age: number;
    city: string;
};

let person1: Person;
person1 = {
    name: "Alice",
    age: 30,
    city: "New York"
};

console.log("Name: " + person1.name);
console.log("Age: " + person1.age);
console.log("City: " + person1.city);
