let a = "Apple";
if ((a==="Apple") && (a.length>3)){
    console.log("good string")
} else {
    console.log("not a good string")
}

console.log("-------------")

// switch

// days

let day = 3;

switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("WED");
        break;
    case 4:
        console.log("THU");
        break;
    case 4:
        console.log("FRI");
        break;
    case 5:
        console.log("SAt");
        break;
    default :
        console.log("NOt in the data");
}

console.log("-------------")

// // m-2

let workDay = 7;
let workHours;

switch (workDay) {
    case 1:
        workHours = "Monday from 10:00AM to 9:00PM" ;
        break;
    case 2:
        workHours = "Tuesday 10:00 to 9:00";
        break;
    case 3:
        workHours = "Wednesday 10:00 to 9:00";
        break;
    case 4:

        workHours = "thusday 10:00 to 9:00";
        break;
    case 5:
        workHours = "Friday 10:00 to 9:00";
        break;
    case 6:
        workHours = "Saturday10:00 to 9:00";
        break;
    case 7:
        workHours = `sunday "Holiday"`;
        break;
    default:
        console.log("not in the list");
}
console.log(`Selected day is ${workHours}`);
console.log("-------------")

console.error("Console Error")

console.log("-------------")

// array Functions

let arr = ["banana", "ohoo", "naa.."];
arr.shift();
arr.unshift("havana");
console.log(arr);

console.log("-------------")

let mv = ['kane','batista','randy','vince'];
console.log(mv.includes("kane"));

console.log("-------------")

let str = "sting1";
var str1 = "string2";
let newstr = str.concat(str1);    //concatenae in sting and arrays 
console.log(newstr);

console.log("-------------")

let arrs = ["array1"];
let arr1 = ["array2"];
let newarr1 = arrs.concat(arr1);
console.log(newarr1);

console.log("-------------")

let numbers = ["1", "2",'5', '6', '7', '3', '4', '8', '9'];

var letter = ['v','a','r','s','h','a'];


// let spacedata = prompt("Enter your Name With spaces");
// let nospace = spacedata.trim();
// console.log(nospace);

let data = "this is the text";
let newdata = data.split(" ");
console.log(newdata);
console.log("-------------")
console.log(`${newdata.join('')}`);   // with out spaces

console.log("-------------")


let text = ['this','is','the','text'];
let newText = text.join(' ');
console.log(newText);

console.log("-------------")

let black = "varsha is black";
// let newtext = black.split(' ');                    //make it array and then resever it
// const newnewtext = newtext.reverse().join(' ');
// console.log(newnewtext);

console.log (black.split(' ').reverse().join(' '))
console.log("-------------")

// nested array

let num = [["Dinesh", 260], ["Varsha", 69], ["gallodu", 0]];
console.log(`The Student name : ${num[1][0]} \nThe Student Rollnumber : ${num[1][1]}`)
console.log("-------------")

let numsort = [5,42,12,4,2,1,-1]
console.log(numsort.sort());

console.log("-------------")

let random = ["book"];
let random2 = ["Pen"];
let value = random===random2;                   // array value & type is allways false cuz there address are different
console.log(value);

console.log("-------------")


//loops

let rand = 10;
function myFunction(flag) {
    if (flag){
        for (let i = 1; i <= 10; i++) {
            console.log(i, "Gandu");
        }
    }                                               // code error
    else {
        console.log( "worng code")
    }
}
myFunction(true);

console.log("-------------")


let rad = 9;
function printNumbers(cond) {
    if (cond) {
        for (let i = 1; i <= rad; i++) {
            console.log(i, "Nut Braker");
        }
    } else {
            console.log(i, "Error");
        }
 }
printNumbers(true);


console.log("-------------")

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

console.log("-------------")
for (let i=1 ; i<=10 ; i+=2){
    console.log(i);
}
console.log("-------------")
//odd numbers
for (let i=15 ; i>=1 ; i=i-2){
    console.log(i)
}
console.log("--------------")
for (let i=1 ; i <=15 ; i=i+2){
    console.log(i);
}
console.log("-------------")
//even numbers
for (i=2;i<=10;i=i+2){
    console.log(i)
}
console.log("-------------------");
for(i=10;i>=2;i=i-2){
    console.log(i);
}
console.log("-------------------");
// let n = prompt("What table you need");
let n = 19
let newn = parseInt(n);                                                //tables 
if (!isNaN(newn)) {
    console.log(`Your multiplication table for ${newn}:`);
    for (let i = newn; i <= newn * 10; i += newn) {
        console.log(i);
    }
} else {
    console.log("Invalid input. Please enter a number.");
}
 
console.log("-------------------");

// input Multipication Prompt


// nested loops
for ( let i = 1 ; i <= 5 ; i ++){
    console.log(`outer value ${i}`);
    for (let j = i ; j <= 5 ; j++){
        console.log(`inner div : ${j}`);
    }
}
console.log("-------------------------------------");
for (let i = 1; i <= 10; i++) {
    console.log(`Outer ${i}`);
    for (let j = i; j <= i + 5; j++) {
        console.log(`innner div ${j}`);
    }

}

console.log("-------------------");
//do the Dry Run -- done

// while loop

let d = 1;
while (d <= 5) {
    console.log(d);
    d++;
}

console.log(`------------`)
let j = 1;
while(j<=50){
    console.log(j);
    j = j + 1 ;
}
console.log(`------------`)
let roll = 1;
while(roll<=10){
    console.log(`Roll Number wise:\n ${roll}:`);
    roll++;
}

//Movie guess code (Whileloop)

// const movie = "Boom";
// let guess = prompt("Input the Movie");

// while (guess !== movie) {
//     if (guess === "quit") {
//         console.log("You have exited");                                       //WorKing Fine
//         break;
//     } else {
//         guess = prompt("Incorrect name. Try again or type 'quit' to exit");
//     }
// }
// if (guess === movie) {
//     console.log(`Correct name! ${movie}`);
// }

/////
// const movie = 'kabbom';
// let guess = prompt('Input to the movie');
// while (guess !== "quit") {
//     if (guess === movie) {
//         console.log(`Correct Answer : ${movie}`);
//         break;
//     } else {
//         console.log(`inncorrect movie :${movie}`);
//     }
//     guess = prompt("Try again");
// } if (guess === "quit") {
//     console.log("You Are the Chosen One");
// }

//////////////////////////////////////////////

//Break Keyboard -- for guess game
// let name = "kabali";
// let guess = prompt("TYpo the Answer");
// while (guess !== name) {
//     if (guess === "quit") {
//         console.log("you are the chosen one");
//         break;                                       //////break keyword
//     }
//     guess = prompt("try again");
// } if (guess === name) {
//     console.log(`correct answer ${name}`);
// }

//////
//loop with arrays 
console.log(`-------------`)
let arr32 = ['1', '2', '3', '4', '5', '6'];
for (i = 0; i < arr32.length; i++) {
    console.log(i, arr32[i]);
}
console.log(`-------------`)
let newarr = ['apple','mango','orange',`pineapple`,`greenapple`,`asd`];
for (i=1;i <newarr.length; i=i+2){                                            // for odd numbering in indexing 
    console.log(i,newarr[i])
}
console.log(`-------------`)

let newarr22 = ['apple', 'mango', 'orange', `pineapple`, `greenapple`, `asd`];
newarr22.push("asd")
for (let i = 0; i < newarr22.length; i = i + 2) {                     //for even number
    console.log(i, newarr22[i])
}

console.log(`-------------`)

let revarr = ['apple', 'mango', 'orange', `pineapple`, `greenapple`, `asd`];
for (let i = revarr.length - 1; i >= 0; i--) {             // for ReVerces The indexing 
    console.log(i, revarr[i])
}

console.log(`-------------`)

// // nested loop with arrays 
let heros = [['ironman', "cap'nt", 'blackwidow', 'falcon', 'bucky', 'wintersolder'], ['superman', 'batman', 'wonderwomen', 'cybor', 'aquaman', 'joker']];
for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
    for (let j = 0; j < heros[i].length; j++) {
        console.log(`index=${j}==${heros[i][j]}`)
    }
}
console.log(`-------------`)
// let students = [["Gandu", 100], ["Bommer", 99], ['Ganduva',00]];
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
//     for(let j=0 ; j<students[i].length;j++){
//         console.log(`Name : ${j}: ${students[i][j]} `)
//     }
// for (let k=0 ; k<students[i].length;k++){  =               // this is the Logging Statement
//     console.log(`marks for the student ${students[k]}`)
// }
// console.log(`marks for the student ${students[i][j]}`)

// }
console.log(`-------------`)
let students1 = [["Gandu", 100], ["Bommer", 99], ['Ganduva', 0]];
for (let i = 0; i < students1.length; i++) {
    console.log(students1[i]);
    for(let j = 0; j < students1[i].length; j++){
        console.log(`Detail ${j}: ${students1[i][j]}`); // Improved logging to reflect that it's not just names
    }
    // Corrected to log the name and score separately in a more understandable way
    console.log(`Name: ${students1[i][0]}, Score: ${students1[i][1]}`);
}
console.log(`-------------`)
let students = [["Gandu", 100], ["Bommer", 99], ['Ganduva', 0]];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
    for (let b = i; b < students[i].length; b++) {
        console.log(`Details: ${b}, Scroce${students[i][b]}`)
    }
    console.log(`Name: ${students[i][0]}, Scroce: ${students[i][1]}`)
}
console.log(`-------------`)
//for of Loop 


let num1 = ['1', '2', '3', '4', '5', '6'];

for (i of num1) {
    console.log(i)
}
console.log(`-------------`)

for (names of students) {                 ///line 368
    console.log(names)
}

for (name of students) {
    for (marks of name) {
        console.log
    }
} 

for (list of heros) {
    for (heros of list) {
        console.log(heros)
    }
}
console.log(`-------------`)

for (names of students) {
    for (students of names) {
        console.log(names)
    }
}
console.log(`-------------`)

let Dinesh = "Dinesh"
for (char of Dinesh) {
    console.log(char)
}

console.log(`-------------`)

let Varsha = "Varsha";
for (cher of Varsha) {
    console.log(cher);
}

console.log(`-------------`)
// todo -- working code 
// let todo= [];
// let req;
// while(true) {
//     req = prompt("please type you Request list,add,delete,Quit").toLowerCase();
//     if(req === "quit"){
//         console.log(`you have quited`);
//         break;
//     }
//     else if (req === "list") {
//         console.log(`Name of the ${req}`);
//         console.log("-----------")
//           for (let i = 0 ; i < todo.length; i++){
//             console.log(i + 1 + ". " + todo[i]);
//             }
//             console.log("-----------")
//         }
//     else if (req === "add") {
//         let task = prompt("what you wanna add to the list");
//         todo.push(task);
//         console.log("task added sussesfully");
//     }
//     else if (req === "delete"){
//         let del = prompt("what you wanna delete in numbers");
//         del = parseInt(del);
//         todo.splice(del ,1);
//         console.log("you have sussesfully deleted the code")
//         console.log(`your deleted print `);
//     } else {
//         alert("worng Request");
//     }
//     // req = prompt("what you wanna add next");
// }

