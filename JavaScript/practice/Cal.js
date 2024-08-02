let num1 = 6;
let num2 = 9;

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let addEl = document.getElementById("add-el")
let subEL = document.getElementById("sub-el");
let divEl = document.getElementById("div-el");
let multEl = document.getElementById("mult-el");
let sumEl = document.getElementById("sum-el");
let useChar = document.getElementById("use-char")
function addcl() {
    let Results = num1 + num2
    sumEl.textContent = `Sum  :  ${Results}`
    addEl.textContent = "You suck!"
    useChar.textContent = "You Realy SUCK at Math"
}
function sub() {
    let Results = num1 - num2
    sumEl.textContent = `Sum  :  ${Results}`
    useChar.textContent = "Fuck U MF"

}

function div() {
    let Results = num1 / num2
    sumEl.textContent = `Sum  :  ${Results}`
    useChar.textContent = "Idiots "

}

function mul() {
    let Results = num1 * num2
    sumEl.textContent = `Sum  :  ${Results}`
    useChar.textContent = "Karma is Black!"

}