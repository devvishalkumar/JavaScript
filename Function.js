JavaScript Functions — Full Explanation
🔹 1. What is a Function?
A function is like a small machine inside your program.
You give it some input (data), it does some work, and gives you output.

👉 Example socho:

Tum TV ka remote button dabate ho (input), TV on hota hai (output).
Remote ka "on" button = function.

🔹 2. Why Use Functions?

Functions help you:

🔁 Reuse code — same logic baar-baar likhne ki zarurat nahi.

✨ Organize your program — code chhote parts me divide hota hai.

🧩 Debug easily — agar koi part me problem hai, sirf us function ko check karna hota hai.

🔹 3. How to Create a Function (Syntax)
function functionName() {
  // code to execute
}

🧩 Example:
function greet() {
  console.log("Hello Vishal!");
}


How to call (run) the function:

greet();


📤 Output:

Hello Vishal!

🔹 4. Parameters and Return Values

Functions can take input values (parameters) and give back output (return).

Example:
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);


📤 Output:

8


👉 Here:

a and b = parameters (inputs)

return a + b = output

🔹 5. Types of Functions
1. Function Declaration
function greet() {
  console.log("Hello!");
}

2. Function Expression
const greet = function() {
  console.log("Hello!");
};

3. Arrow Function (ES6)
const greet = () => {
  console.log("Hello!");
};


💡 Arrow functions are shorter and used more in modern JavaScript.

🔹 6. Function Scope

Variables created inside a function exist only inside that function.

function test() {
  let x = 10;
  console.log(x); // ✅ works
}

console.log(x); // ❌ error (x is not defined)

🔹 7. Default Parameters

If you don’t give an argument, a default value can be used.

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();        // Hello Guest
greet("Vishal"); // Hello Vishal

🔹 8. Function Hoisting (Advanced)

In JavaScript, you can call a function before it is defined — but only for function declarations.

sayHi(); // works fine

function sayHi() {
  console.log("Hi!");
}


But this ❌ doesn’t work with function expressions or arrow functions.
