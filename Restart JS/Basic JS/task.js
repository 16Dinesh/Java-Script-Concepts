const number1 = document.querySelector("#num1");
const number2 = document.querySelector("#num2");
const btn   = document.querySelector("button");
let answer = document.querySelector("#answer");

// function mult() {
//     let result = parseInt(number1.value) * parseInt(number2.value);
//     answer.textContent = `This is the Answer: ${result}`;
// }
// btn.addEventListener("click", mult)


btn.addEventListener("click", () => {
    let result = parseInt(number1.value) * parseInt(number2.value)
    answer.textContent = `This is the Answer : ${result}`
})