// Loops :- Loops allow us to repeat a block of code multiple times until a certain condition is met.

//  for loop :- A for loop repeats a block of code a fixed number of times.
// Print numbers 1 to 5:-
for(let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("End for loop \nStart while loop");

// while loop :- Used when the number of iterations is not fixed, and we run until a condition becomes false.
// Print numbers 10 to 15:-

let i = 10;
while (i<=15) {
    console.log(i);
    i++;
}

console.log("End while loop \nStart do...while loop");

// do...while loop :- This loop runs at least once, even if the condition is false.
// Print numbers 15 to 25:-

let j = 15;
do {
    console.log(j);
    j++;
}while (j <= 25);

console.log("End do...while loop \nStart for...of loop");

// for...of Loop :-Used to loop through arrays, strings, or iterables — gives you values directly.

let colors = ["black","white","red"];

for (let color of colors) {
    console.log(color);
}

console.log("End for...of loop \nStart for...in loop");

//  for...in Loop :- Used to loop through object properties — gives you keys.

const student = {name: "Vishal",age: "18",city: "palamu"};

for (let key in student) {
    console.log(key + " : "+ student[key]);
}

console.log("End for...in loop");

// break Statement :- Stops the loop immediately when a condition is met.

for (let i = 1; i <= 10; i++) {
    if(i === 5) break;
    console.log(i);
}

console.log("end break");


// continue Statement :- Skips the current iteration and continues the loop.

for (let i=1; i<=5;i++) {
    if(i === 3) continue;
    console.log(i);
}

console.log("end continue");

//  Nested Loop :- A loop inside another loop. Common in patterns or tables.

for(let i = 1; i<=3; i++) {
    for(let j=1; j<=3; j++) {
        console.log(`i=${i},j=${j}`);
        
    }
}

// Print the sum of numbers from 1 to 10:

sum = 0;
for(i=1; i<=10; i++) {
    sum +=i;
}

console.log("Total Sum :",sum);



//  Practice Questions :-

//  Q1. Print 1 to 10 using for loop.

for(i=1; i <= 10; i++) {
    console.log(i);
}

console.log("complete 1st qs.");


// Q2. Print even numbers from 2 to 20 using while loop.

i = 1;
while (i<=20){
    if(i%2===0) {
        console.log(i);
    }
    i++;
}

console.log("complete 2 question");

// Q3. Print numbers from 10 down to 1 using do...while loop

let k = 10;
do {
    console.log(k);
    k--;
} while (k >= 1);

console.log("complete 3 question.");


//  Q4. Find the sum of numbers from 1 to 50 using for loop.

sum = 0;
for(let l=1; l<=50; l++) {
    sum +=l;
}

console.log("total sum = ",sum);

// Q5. Print multiplication table of any number (like 7) using while loop

let num = 7;
let n = 1;
while (n <= 10){
    console.log(`${num} x ${n} = ${num * n}`);
    n++;
}

//  Q6. Print numbers from 1 to 10, but skip 5 (use continue)

for(let i = 1; i<=10; i++) {
    if(i===5) continue;
    console.log(i);
}

// Q7. Print numbers from 1 to 10, but stop at 7 (use break)

for(let i=1; i<=10; i++) {
    if(i===7) break;
    console.log(i);
}

//  Q8. Print the digits of a number in reverse order (like 123 → 321).

let nums = 123;
let reverse = 0;

while (nums > 0) {
    let digit = nums % 10;
    reverse = reverse * 10 + digit;
    nums = Math.floor(nums/10);
}

console.log(reverse);


