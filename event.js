// let btns = document.querySelectorAll("button");
// console.dir(btns);
// btn.onclick = function() {
//   console.log("Button Was Clicked");
// }

// btn.onclick = () => alert("Clicked button!");

// for(let btn of btns) {
//   btn.onclick = sayHello;
//   btn.onmouseenter = () => console.log("Enter mouse on button!");
// btn.addEventListener('click', () => console.log("button Clicked!"));
// btn.addEventListener('click', () => alert('Hello!'));
// btn.addEventListener('click', () => alert('Preetam!'));
// btn.addEventListener('dblclick', () => alert('double Click Function...'));
// }

// function sayHello() {
//   alert("Hello Preetam!");
// }

// Activity

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   let ranColor = document.querySelector("h3");
//   ranColor.innerText = genColor();
//   let div = document.querySelector('div');
//   div.style.backgroundColor = genColor();
//   div.style.color = genColor();
//   console.log("color Updated..");
//   btn.style.color = genColor();
// });


// function genColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);
//   let color = `rgb(${red}, ${green}, ${blue})`;
//   return color;
// }

// this method 
// let btn = document.querySelector("button");

// function changeColor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);


// keyboard method:
// let inp = document.querySelector("input");

// inp.addEventListener("keyup", function(event) {
//   console.log("key = ", event.key);
//   console.log("code = ", event.code);
//   console.log("key was pressed.")
// });


// Form Method
// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   // let inp = document.querySelector("input");
//   console.dir(form);
//   let user = this.elements[0];
//   let pass = this.elements[1];
//   console.log(user.value);
//   console.log(pass.value);
// });

// Input System

let inp = document.querySelector("input");
let p = document.querySelector("p");
inp.addEventListener("input", function() {
  console.log(inp.value);
  p.innerText = inp.value; 
})