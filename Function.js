//  Create a Function

function myName() {
    console.log("Vishal Kumar");
}

//  Call (Run) function
myName()

// Parameters and Return Values :-
// Functions can take input values (parameters) and give back output (return).

/*
function add(a, b) {   // a & b is parameter (input)
    return a + b;
}

let result = add(5,10);
console.log(result)  // Output : 15
*/

//  Types Of Functions

//  1. Function Declaration

/*
function greet() {
    console.log("Hello World");
};
*/

// 2. Function Expression

/*
const greet = function() {
    console.log("Hello")
};
*/

//  3. Arrow Function (ES6)

/*
const greet = () => {
    console.log("Helloworld")
};
*/

// Function Scope :- Variables created inside a function exist only inside that function.

/*
function test() {
    let x = 10;
    console.log(x); // works
}

console.log(x);  // error (x is not defined)
*/

// Default Parameters :- If you don’t give an argument, a default value can be used.

/*
function greet(name = "Guest") {
    console.log("Hello," + name);
}
greet() //Hello,Guest
greet("Vishal") //Hello,Vishal
*/

// Practice Exercise 1 — Basic Function

// Create a function called welcomeUser that:
// Takes one parameter — name
// Prints: "Welcome, <name>! Have a great day!"

/*
function welcomeUser(name = "Vishal") {
    // console.log("welcome," + name + "! Have a great day!");
    console.log(`welcome, ${name}! Have a great day!`);
}

welcomeUser();
*/

// Practice Exercise 2 — Function with Return

// Create a function called multiplyNumbers that:
// Takes two parameters — a and b
// Returns their multiplication result
// Print the result outside the function

const multiplyNumbers = (a,b) => {
    return a * b;
}
let result = multiplyNumbers(5,4);
console.log("Result:", result);

// Practice Exercise 3 — Default Parameter

// Make a function greet that:
// Has one parameter name
// Default value of name should be "Guest"
// Prints "Hello, <name>!"

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet()
greet("Vishal")
