const name = "Vishal kumar"
const age = 18

// console.log("my name is",name,"my age is",age);

console.log(`my name is ${name}and my age is ${age}`);

const gameName = new String("Helloworld");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("w"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,6)
console.log(anotherString);