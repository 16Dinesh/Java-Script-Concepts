let div = document.querySelector('div');
let btn = document.querySelector('button');

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}

btn.addEventListener('click', function() {
    let h3 = document.querySelector('h3');
    let randRgb = randomColor();
    h3.innerText = randRgb; // Update the text of h3 to show the generated color
    div.style.backgroundColor = randRgb; // Apply the generated color to the div
});
