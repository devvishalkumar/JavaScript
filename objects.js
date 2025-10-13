//  Object :- Object ek data structure hai jisme data key-value pairs ke form me store hota hai.


const student = {
    name: "Vishal Kumar",
    age: 20,
    branch: "CSE",
    skills: ["HTML", "CSS", "JS"]
};

console.log(student);
console.log(student["skills"]);


// Adding and Updating Properties

student.email = "vishalkumar@gmail.com";
student.age = 21;
console.log(student);

// Deleting a Property

delete student.branch;
console.log(student);


// Object Methods (Function inside Object)


const user = {
    name : "Vishal",
    greet : function() {
        console.log("Hello " + this.name);
    }
};

user.greet(); // Hello Vishal



// Loop through Object (for...in)


const car = {
    brand: "mercedes",
    color: "red",
    price: 7500000
};

for (let key in car) {
    console.log(key + ": " + car[key]);
}


// Object inside Array


const students = [
    {name: "Aryan",age: 20},
    {name: "Vishal",age: 18},
    {name: "Karan",age: 22}
];

console.log(students);
console.log(students[0]);  // {name: 'Aryan', age: 20}
console.log(students[2].name); // Vishal


// Destructuring Objects


const person = {name: "Vishal",age: 19, city: "Latehar"};
const {name, age} = person;

console.log(name);
console.log(age);


// Object.keys(), Object.values(), Object.entries()


car = {brand: "Tata", model: "Nexon",price: 1200000};

console.log(Object.keys(car)); // ['brand', 'model', 'price']
console.log(Object.values(car)); // ['Tata', 'Nexon', 1200000]
console.log(Object.entries(car)); // [["brand","Tata"],["model","Nexon"],["price",1200000]]


// Spread Operator with Objects

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const merged = {...obj1,...obj2};
console.log(merged);  // {a: 1, b: 2, c: 3, d: 4}



// Practice Questions :-


//  1. Create an object laptop with properties brand, model, price.
//  Print all values.

const laptop = {
    brand: "Acer",
    model: "Aspire lite",
    price: 32000
};

console.log(Object.values(laptop));

// 2.Add a new property color in it and print updated object.

laptop.color = "black";
console.log(laptop);

// 3.Create an object user with a method login() 
// that prints “User logged in”.


const user = {
    username: "Vishal kumar",

    login: function() {
        console.log(this.username + " logged in");
    }
};

user.login();


// 4. Loop through an object car and print all keys and values.

const car = {brand:"BMW",color:"blue",price:7500000};

for (let key in car) {
    console.log(key + ": " + car[key]);
};

// 5.Create an array of 3 students (each student is an object with name & marks). 
// Print names of all students who scored more than 80

const students = [
    { name: "Vishal", marks: 85 },
    { name: "Bablu", marks: 75 },
    { name: "Ajad", marks: 90 }
];

for (let student of students) {
    if (student.marks > 80) {
        console.log(student.name);
    }
}


// Use destructuring to extract name and age from an object.

const person = {name: "Vishal kumar",age: 18,city:"palamu"};

const {name, age} = person;

console.log(name);
console.log(age);

// Merge two objects using spread operator.

const object1 = {a:10,b:20};
const object2 = {c:30,d:40};

const merge = {...object1,...object2};
console.log(merge);


