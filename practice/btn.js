// document.getElementById("count-el").innerText = 5;
// console.log(countEl)
let welcomeEl = document.getElementById("welcome-el");

let name = "Gandu"
let greeting = "What'ss..UP"

welcomeEl.innerText = name + " " + greeting;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
// console.log(saveEl)

let count = 0;

function increment() {
    console.log("increment Btn is clicked")
    count += 1;
    countEl.innerText = count
    console.log(count);
}

let Slave = 0

// function save() {
//     console.log("save btn is Clicked")
//     let countstr = count + " - ";  // count and make space
//     saveEl.textContent += countstr  // update the Html Element
//     countEl.innerText = count
//     count = 0
//     console.log(count);
// }

// save btn error msg 
let errorEL = document.getElementById("error-el")
function save() {
    console.log("btn clicked");
    errorEL.textContent = "Something went wrong, please try again"

}


let linkrefEL = document.getElementById("Linkref-el");
function link() {
    linkrefEL.textContent = "Fuck You! Bitch"
}