// DOM (Document Object Model) ek structure hai jo HTML page ko JavaScript ke through control karne deta hai.

let heading = document.getElementById("title");
heading.style.color = "red";
heading.innerText = "Welcome to DOM!";

// Changing HTML Content

document.getElementById("myid").innerText = "Welcome Vishal";
document.getElementById("myid").innerHTML = "<b>Content</b>";

// Changing CSS (Style) Using DOM

document.querySelector("h1").style.color = "green";
document.querySelectorAll("h1")[0].style.fontSize= "40px";

// Event Handling
// Event = user action (like click, hover, key press, etc.)

function greet() {
    alert("Hello Vishal");
}

let clickBtn = document.getElementById("btn")
clickBtn.style.backgroundColor = "red";
clickBtn.style.color = "white";

//  Create and Add Elements Dynamically

let newPara = document.createElement("p");
newPara.innerText = "This paragraph was added by JS!";
document.body.appendChild(newPara);

// Remove Elements

let deleteEl = document.getElementById("myid");
deleteEl.remove();



//  Practice Question

// 1️. Change <h1> text and color using DOM.

let newTxt = document.getElementById("title");
newTxt.innerText = "Welcome to my page";
newTxt.style.color = "blue";

// 2. Make a button that changes background color on click.


let NewBtn = document.createElement("button");
NewBtn.innerText = "Submit";
NewBtn.style.color = "yellow";
document.body.appendChild(NewBtn);

/*
NewBtn.onclick = Btn;
function Btn () {
    NewBtn.style.backgroundColor = "red";
}
*/

NewBtn.addEventListener("click",() => {
    NewBtn.style.backgroundColor = "green";
})


// 3. Create an input box + button → show entered text on screen.

let box = document.createElement("input");
let Btn = document.createElement("button");
let display = document.createElement("p");

document.body.appendChild(box);
document.body.appendChild(Btn);
document.body.appendChild(display);
Btn.innerText = "Submit";

Btn.addEventListener("click", () => {
    let text = box.value;
    display.innerText = "You Entered: " + text;
    box.value = "";
})


// 4. Add 3 new <p> elements dynamically using createElement().

let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");

document.body.appendChild(p1);
document.body.appendChild(p2);
document.body.appendChild(p3);

p1.innerText = "This is first para";
p2.innerText = "This is second para";
p3.innerText = "This is third para";

// 5️. Hide and show a paragraph using buttons.

let para = document.createElement("p");
para.innerText = "This is a paragraph.";
document.body.appendChild(para);

let paraBtn = document.createElement("button");
document.body.appendChild(paraBtn);

paraBtn.innerText = "Hide";
paraBtn.style.backgroundColor = "green";
paraBtn.style.color = "white";

paraBtn.addEventListener("click",() =>{
    if(para.style.display === "none") {
        para.style.display = "block";
        paraBtn.innerText = "Hide";
    } else{
        para.style.display = "none";
        paraBtn.innerText = "Show";
    }
})
