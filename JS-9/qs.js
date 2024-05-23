// Practice Qs
// Add the following elements to the container using only JavaScript and the DOM methods.
// i) a with red text that says "Hey I'm red!"
// ii) an with blue text that says "I'm a blue h3!"
// iii)  a with a black border and pink background color with the following elements inside of it:
// • another <h1> that says "I'm in a dive
// • a <p>that says "ME TOO!"

let text = document.createElement('p');
text.innerText = " Hey I'm red!";
document.querySelector('body').prepend(text);
// text.classList.add('red');
text.style.color = 'red';

let head3 = document.createElement("h3");
head3.innerText = "I'm a blue h3!";
document.querySelector('body').append(head3);
head3.style.color='blue';


let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');

h1.innerText = "I'm in a div"
p2.innerText = "ME TOO!"

div.append(h1);
div.append(p2);
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

// document.querySelector('body').prepend(div);

document.body.prepend(div);