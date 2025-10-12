//  Array :- An array is a special variable that can store multiple values in a single place.
// Think of it like a list or collection of items.

let color = ["red","blue","green","black","white"];

console.log(color);
console.log(color[0]); // red
console.log(color[1]); // blue
console.log(color.length); //5

//  modify Array Elements

color[1] = "purple";
console.log(color); // ['red', 'purple', 'green', 'black', 'white']

// Common Array methods

color.push("orange");
console.log(color); // ['red', 'purple', 'green', 'black', 'white', 'orange']

color.pop();
console.log(color); // ['red', 'purple', 'green', 'black', 'white']

color.unshift("yellow");
console.log(color); // ['yellow', 'red', 'purple', 'green', 'black', 'white']

color.shift();
console.log(color); // ['red', 'purple', 'green', 'black', 'white']

console.log(color.indexOf("green")); // 2
console.log(color.includes("black")); // true

//  Advanced Array Method

// forEach() – run something for each element

/*
let number = [2,3,4,5,6];
number.forEach(num => {
    console.log(num * 2);
});
*/

// map() – create a new array by transforming elements

/*
let squares = number.map(num => num * num);
console.log(squares); // [4, 9, 16, 25, 36]
*/

// filter() – create a new array with elements that pass a condition

/*
let evenum = squares.filter(num => num % 2 === 0);
console.log(evenum); // [4, 16, 36]
*/

// reduce() – reduce array to a single value (e.g., sum)

/*
let sum = evenum.reduce((total,num) => total + num, 0);
console.log(sum);
*/

// find() – returns first element that matches a condition.

/*
let firsteven = squares.find(num => num % 2 === 0);
console.log(firsteven); // 4
*/

// some() & every() – Check conditions :-
//  some() → checks if any element satisfies the condition.
//  every() → checks if all elements satisfy the condition.

/*
let hasAbove25 = squares.some(num => num > 25);
let allAbove5 = squares.every(num => num > 5);

console.log(hasAbove25); // true
console.log(allAbove5); // false
*/


//  Advanced Array Methods – Practice Questions


// Q1. Double the Numbers (map)
// Given: let numbers = [2, 5, 8, 10];
// Task: Create a new array where each number is doubled.

/*
let numbers = [2,5,8,10];

const doublenum = numbers.map(num => num * 2);
console.log(doublenum);
*/

// Q2. Filter Even Numbers (filter)
// Given: let numbers = [3, 7, 12, 15, 20, 25];
// Task: Use filter() to get only even numbers.

/*
let numbers = [3, 7, 12, 15, 20, 25];

even = numbers.filter(num => num % 2 === 0);
console.log(even);
*/

// Q3. Find First Failing Student (find)
// Given:
// let marks = [45, 67, 32, 89, 76];
// Task: Use find() to get the first mark less than 40.

let marks = [45, 67, 32, 89, 76];

failingStudent = marks.find(mark => mark < 40);
console.log(failingStudent);


// Q4. Shopping Cart Total (reduce)
// Given: let cart = [250, 150, 300, 100];
// Task: Use reduce() to calculate the total cost.

let cart = [250, 150, 300, 100];

const totalcost = cart.reduce((total,cost) => total + cost, 0);
console.log(totalcost);


// Q5. Check if Array Has Adults (some)
// Given: let ages = [12, 17, 19, 24, 15];
// Task: Use some() to check if there is at least one person aged 18 or above.

/*
let ages = [12, 17, 19, 24, 15];

person = ages.some(age => age >= 18);
console.log(person);
*/

// Q6. Check if All Are Adults (every)
// Given: let ages = [22, 18, 25, 20];
// Task: Use every() to check if all are adults (age ≥ 18).

let ages = [22, 18, 25, 20];

adults = ages.every(age => age >= 18);
console.log(adults);


// Q7. Transform Names (map + toUpperCase)
// Given: let names = ["vishal", "aman", "neha"];
// Task: Create a new array with all names in uppercase.

let names = ["vishal", "aman", "neha"];

const transName = names.map(name => name.toUpperCase());
console.log(transName);

//  Q8. Filter Expensive Products (filter)
// Given: let prices = [1500, 2500, 800, 3200, 1200];
// Task: Use filter() to keep only prices greater than 2000.

let prices = [1500, 2500, 800, 3200, 1200];

const greaterPrice = prices.filter(price => price > 2000);
console.log(greaterPrice);


// Q9. Calculate Average Score (reduce)
// Given: let scores = [80, 90, 70, 100];
// Task: Use reduce() to calculate the average score.

let scores = [80, 90, 70, 100];

const total = scores.reduce((total,score) => total + score, 0);
const avgScore = total / scores.length;
console.log((avgScore));


//  Q10. Mix Methods (map + filter + reduce)
// Given: let numbers = [1, 2, 3, 4, 5, 6];
// Task:
// Use map() to multiply each by 2
// Use filter() to keep numbers > 5
// Use reduce() to find their sum

let numbers = [1, 2, 3, 4, 5, 6];

// multiply2 = numbers.map(num => num*2);
// greater5 = multiply2.filter(num => num >5);
// sum = greater5.reduce((total,num) => total + num,0);
// console.log(sum);

 //  OR
const sum = numbers
    .map(num => num * 2)
    .filter(num => num > 5)
    .reduce((total, num) => total + num, 0);

console.log(sum);
