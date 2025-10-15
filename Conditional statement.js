// if Statement :- Used to run code only if a condition is true.

/*
let age = 22;
if(age >= 18) {
    console.log("You can Vote");
}
*/

// if...else Statement:- Runs one block if true, another if false.

let num = 20;
if (num % 2 ===0) {
    console.log("Even Number");
} else {
    console.log("Odd number");
}

// if...else if...else:- Used when you have multiple conditions.

let marks = 85;

if(marks >= 90) {
    console.log("Grade: A+");
}else if (marks >= 75) {
    console.log("Grade A");
}else if(marks >= 50) {
    console.log("Grade B");
}else{
    console.log("Fail");
}

// Nested if:- When one if is written inside another.

let username = "Vishal";
let password = "1234";

if (username === "Vishal") {
    if (password === "1234") {
        console.log("Login successful");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("Invalid username");
}


// switch Statement:- Used when you have many fixed values to compare.

let day = 2;

switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Invalid day");
}


//  Ternary Operator:- A short way to write if...else in one line.

let ages = 18;
let result = (ages >= 18) ? "Adult" : "Minor";
console.log(result);



//  Practice Questions 

// Q1. Write a program to check if a number is positive, negative, or zero.

let n = 0;

if (n > 0) {
    console.log("Number is positive");
} else if (n < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}




// Q2. Check whether a person is eligible to vote or not (age ≥ 18).

let age = 20;

if(age >= 18) {
    console.log("You Can Vote");
} else{
    console.log("You cannot Vote");
}


// Q3. Find the largest number among three numbers using if–else.

let a = 10, b = 25, c = 18;

if (a >= b && a >= c) {
    console.log("Largest number is:", a);
} else if (b >= a && b >= c) {
    console.log("Largest number is:", b);
} else {
    console.log("Largest number is:", c);
}


// Q4. Check whether a given number is even or odd.

num = 12;

if(num%2===0) {
    console.log("Number is Even");
} else{
    console.log("Number is Odd");
}


// Q5. Take marks as input and print the grade based on the following:

let mark = 73;

if(mark >= 90) {
    console.log("Grade: A+");
}else if (mark >= 75) {
    console.log("Grade A");
}else if(mark >= 50) {
    console.log("Grade B");
}else{
    console.log("Fail");
}

// Q6. Write a program that prints the day name based on a number (1 → Monday, 2 → Tuesday … 7 → Sunday).
// If invalid number → print “Invalid day”.

let days = 8;

switch(days) {
    case 1 : console.log("Monday"); break;
    case 2 : console.log("Tuesday"); break;
    case 3 : console.log("Wednesday"); break;
    case 4 : console.log("Thursday"); break;
    case 5 : console.log("Friday"); break;
    case 6 : console.log("Saturday"); break;
    case 7 : console.log("Sunday"); break;
    default : console.log("Invalid day");
}


// Q7. Write a program that takes a number (1–12) and prints the month name.

let months = 5;

switch(months) {
    case 1 : console.log("January"); break;
    case 2 : console.log("February"); break;
    case 3 : console.log("March"); break;
    case 4 : console.log("April"); break;
    case 5 : console.log("May"); break;
    case 6 : console.log("June"); break;
    case 7 : console.log("July"); break;
    case 8 : console.log("August"); break;
    case 9 : console.log("September"); break;
    case 10 : console.log("October"); break;
    case 11 : console.log("November"); break;
    case 12 : console.log("December"); break;
    default : console.log("Invalid months");
}


// Q8. Create a simple calculator using switch that performs addition, subtraction, multiplication, and division.

let num1 = 10;
let num2 = 5;
let operator = "*";  // +, -, *, /

switch (operator) {
    case "+": console.log(num1 + num2); break;
    case "-": console.log(num1 - num2); break;
    case "*": console.log(num1 * num2); break;
    case "/": console.log(num1 / num2); break;
    default: console.log("Invalid operator");
}


// Q9.
// Take a character input (‘a’, ‘e’, ‘i’, ‘o’, ‘u’) and print whether it’s a vowel or consonant (use switch).

let ch = "e";

switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}


// Q10 Write a switch case that checks a value of grade (‘A’, ‘B’, ‘C’, ‘D’, ‘F’) and prints:

let grade = "B";

switch (grade) {
    case "A": console.log("Excellent!"); break;
    case "B": console.log("Good job!"); break;
    case "C": console.log("Average"); break;
    case "D": console.log("Needs improvement"); break;
    case "F": console.log("Fail"); break;
    default: console.log("Invalid grade");
}

