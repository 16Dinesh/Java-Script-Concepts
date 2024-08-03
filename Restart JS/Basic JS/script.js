// Var,let,const

document.write("<p>View in Script.js File</p><h2>Varibles</h2>")
var Speed = "time"
var Speed = "distance"  // variables and values can be changed 

let time = "speed"
time =  "distance"  // Variable is fixed and Values can be changed

const distance = "speed" // Both Variable & Value is Fixed

//_____________________________________________________________
// Data Types

document.write("<h2>DataTypes</h2>") 
// Primitive Data Types
//String --  "String"
//Number -- 1 to infinity
//Boolean -- True/False ||  0 or 1 
//Null -- Can be place Null in value 
//Undefined  -- without any Values can be undefined

//Complex Data Types 
//Arrays -- ["","",05]  // can have any datatype 
let array = ["My Name is", "Dinesh", 21, {name:"dinesh", age: 21}]  // indexing of array [0,1,2,...]
console.log(array[3].name) 
//Object -- {key:"value"} // Having Key value pair
const obj = {
    laptop: "HP",
    model: "ENVY",
    year: 2023,
    stores: ["Hyderabad", "Vijayawada","Chennai"] 
}

console.log(obj.stores[0])
// to know the datatype 
console.log(typeof array)  //typeof show array and object as object 
console.log(Array.isArray(array)) //Array.isArray() give a Boolean Output

//_________________________________________________
//Operators

document.write("<h2>Operators</h2>")
//Arithmetic Operators
// + (add), - (Sub) , * (Mul), / (Divs) , ++(increment), -- (decrement), 

//Assignment Operators
// x+=y , x-=y, x*=y, x/=y, x %= y, x **= y(power)

//Comparison Operators
// == (equal to) , === (check if its equal to and type), != (not equal to), !== (check if its not equal to and type), > , < , >= , <= 

//Logical Operators
//! (Logical not)  && (logical AND), || (Logical OR), ??= (Nullish coalescing assignment operator. first value is undefined or null and when second Value is defined)
let x;
x ??=5
console.log(x)

//_________________________________________________
// Control flow and Conditional Statements 
document.write("<h2>Conditional Statements</h2>")

//if
if("time"== "time") {
    console.log("--------------")
    console.log("If statement")
}

//if else
if ("time" === 'no') {
    console.log("If statement")
} else {
    console.log("else Statement")
}

//if else if
if("time" == "no"){
    console.log("if statement");
} else if ("time" == "time") {
    console.log("else-if Statement");
} else {
    console.log("else statement")
}

//ternary Operator
let t = 1;
let e = 1
//conditon ? if : else ; 
t == e?console.log("ternary") : console.log("not vaild");

//_________________________________________________
// Dialog Box
document.write("<h2>Dialog Box</h2>")

//alert -> alert("hacked")

//prompt -> prompt("type the answer")

//confirm --> confirm("text")

// Type conversion

let z = "21"    
let y = 21
let number = parseInt(z)
let string = String(y)
console.log(typeof string)

//Switch case 
// switch("ex") {
//  case val1 : {
//     console.log("__");
//     break;
//  }
//  case val2 : {
//     console.log("__");
//     break;
//  }
//  case val3 : {
//     console.log("__")
//     break;
//  }
//  default : {
//       console.log("\_/")
//       break;
//  }
// }

//_________________________________________________
// Functions
document.write("<h2>Functions</h2>")

function name() {
    console.log("--------------------")
    console.log("Print name");
}
name()

//scopes

//Global Scope
let apple = 'red'
function glScope() {
    console.log("Global Scope",apple)  // can assess all the values
}
glScope()

//Function Scope
function fnScope() {
    let banna = "Yellow"
    console.log("Functional Scope", banna)  // can only inside the function 
}
fnScope()

//Block Scope  let and const don't work 
function blScope() {
    if("scope" == "scope" ) {       //
    }                               //  
    var red="red"                   //  Block Scope
    console.log(red)                // 
}
blScope()


//anonymous Function
let good = function() {  //without any name 
    console.log("----------------")
    console.log("anonymous Function")
}
good()

//Function with parameters & Return Values
function add(a,b) {
    return a + b
} 
console.log(add(1,2))

//_________________________________________________
// Methods
document.write("<h2>Methods</h2>")

let song = [""]
// Array Method 
// .push()      --> add to end of the array index
// .pop()       --> remove the end of the array index
// .shift()     --> remove the start of the array
// .unshift()   --> add to the start of the array
// .concat()    --> Joins the two or more arrays and returns new array
// .join()      --> Create new String by Concat all the elements of an array and returns a string by a specific separator { .join(" ") }
// .slice()     --> return a shallow copy of selected array index into a new array. foe last add +1 to leave the endpoint
// .splice()    --> changes the contents of an array by removing, replacing, or adding elements  { .splice( 0,2 , "to add") ,  .splice(3, 1, "to keep in one place to replace ")}
// .indexof()   --> gives index of the array, if not gives -1 
// .forEach()   --> Executes a provided function once for each array element.

// Multi Dimensional Array

let multiDimArray = ["this", "is", 'array' , ['This'], ['is'],['Multi', 'Dimensional Array']]
console.log(multiDimArray[5][1])

// String Methods

// .split()       --> this makes the string into array and returns a string by a specific separator
// .trim()        --> remove the white-spaces form left and Right  
// .charAt()      --> gives the string index
// .substring()   --> gives the a portion of the string 
// .replace()     --> replace element of the string
// .toUpperCase() --> make it uppercase
// .toLowerCase() --> make it lowercase 

//_________________________________________________
// Loops
document.write("<h2>Loops</h2>")

//for-loop
console.log('-----------')
let count = ()=> {
    for(let a=0; a<10; a++ ){
        
        console.log(a+1)
    }
}
count()
console.log('-----------')

// while Loop

let num = 1;
while(num <= 10) {
    console.log(num);
    num++
}
console.log('-----------')

//Do-While Loop

let taken = ()=> {
    let i = 1;
    do{
        console.log("do While loopp");
        i++
    } while(i<10)
}
taken()
console.log('-----------')

//Task

//to remove the duplicate in the Array
let dupArray = [1,2,3,4,2,3,4,2,4,6,7,4,5,6,7,8,8,9,9,1,2,1,2,10,4,6] 
let setArray = [...new Set(dupArray)]
console.log(setArray)

//to remove the duplicate in an array of objects 

let objects = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Doe' }
];

let setObj = [...new Map(objects.map(item => [item.name, item])).values()];
console.log(setObj)