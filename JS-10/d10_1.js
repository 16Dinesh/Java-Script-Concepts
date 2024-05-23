// let btn1 = document.querySelector('#btn1');


// btn1.addEventListener('dblclick', function(e) {         // dblclick means doubleclick
//     console.log(e.type); 
//     console.log(`btn is clicked`)
// });


// let btn2 = document.querySelector('#btna2');
// btn2.addEventListener('click',function(e) {
//     console.log(e.type);
//     console.log("Btn is the clicked");
// });

// btn1.forEach(button => {
//     button.addEventListener('dblclick', function(e) {  
//         console.log(e); 
//         console.log('btn is clicked');
//     });
// });

//using the -->  this 

let p = document.querySelector("p");

// p.addEventListener('click', changecolor)

// function changecolor() {
//     this.innerText = "This para color is changed";
//     this.style.backgroundColor = "blue";
//     this.style.color="white";
// }

// keyboard Events 

let inp = document.querySelector('input');


// inp.addEventListener('keydown', function() {
//     console.log('key was pressed')
// });


// inp.addEventListener('keyup', function(e) {
//     console.log('key was Realsed');
//     console.log('key =', e.key);
//     console.log('Code =', e.code);
// });

// inp.addEventListener('keydown' , function (e) {   
//     console.log(e.code)
//     if (e.code == 'ArrowUp') {
//         console.log('you presed the up');
//         console.log('your character moved forward');
//     }else if (e.code == 'ArrowDown' ) {
//         console.log('you presed the down');
//         console.log('your character moved backward');
//     }else if (e.code == 'ArrowRight' ) {
//         console.log('you presed the right');
//         console.log('your character moved rightside');
//     }else if (e.code == 'ArrowLeft' ) {
//         console.log('you presed the let');
//         console.log('your character moved leftside');
//     }
// }) 

let form = document.querySelector('form');

// form.addEventListener('submit' , function () {
//     console.log('your form has been ')
// }) 

// console.log(inp.values)

inp.addEventListener('input', function () {
    console.log(inp.value);
    p.innerText = inp.value;
})