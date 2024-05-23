// async function demo() {
//     throw 'error to catch';
//     return "dinesh";
// }

// const { doUntil } = require("async");

// const { reject } = require("async");

// async function demo() {
//     return "dinesh";
// }

// demo() 
// .then( () => {
//     console.log(`yes`)
// })
// .catch( () => {
//     console.log(`no`)
// }) 


// let demo = async () => {
//     return 5 ; 
// }


// function getNum() {
//     return new Promise( (resolve , reject) =>{
//         let num = Math.floor(Math.random() * 10) +1;
//         return num;
//     });
// }

//await 

// function getNum() {
//     return new Promise( (resolve , reject) =>{
//         setTimeout( ()=> {
//             let num = Math.floor(Math.random() * 9) +1;
//             console.log(num);
//             resolve();  
//         },500);
//     });
// }


// async function deem() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum()
// }

// deem();

//promise to async functions the color change code 

let h1 = document.querySelector('h1')

// function changeColor (color , delay ) {
//    return new Promise ((resolve , reject) => {
//         setTimeout( () => {
//             h1.style.color = color;

//             console.log(`color changed to ${color}`)
//             resolve("color changed");
//         }, delay);
//     })
                                                                                        
// }

// async function demo() {
//     await changeColor("red" , 500);
//     await changeColor("green" , 500);
//     await changeColor("blue" , 500);
//     await changeColor("yellow" , 500);
//     await changeColor("grey" , 500);
//     await changeColor("Black" , 500);
//     changeColor("grey" , 500);
// }
// demo();

//// --> change to error handlers 

//handling rejection with Await

function changeColor (color , delay ) {
    return new Promise ((resolve , reject) => {
         setTimeout( () => {
            let num = Math.floor(Math.random() * 5) +1;             //changed
            if (num > 3 ) {
                reject('promise is rejected')
            }
             h1.style.color = color;
             console.log(`color changed to ${color}`)
             resolve("color changed");
         }, delay);
     })
 
 }
 
 async function demo() {
    try {
        await changeColor("red" , 500);
        await changeColor("green" , 500);
        await changeColor("blue" , 500);
        await changeColor("yellow" , 500);
        await changeColor("grey" , 500);
        await changeColor("Black" , 500);
        changeColor("grey" , 500);f
    }catch (err) {
        console.log('error caught');
        console.log(err);
    }

    let a = 5;
    let b = 10;
    let num = a + b;
    console.log(num)
 }

demo();