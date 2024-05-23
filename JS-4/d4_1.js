// for loop 

console.log("loop statements i++")
for (i = 1 ; i<=5 ; i++){
    console.log(i)
}

console.log("loop statements i--")
for (i = 5 ; i >= 1 ; i--){
    console.log(i)
}

console.log("loop statements odd numbers")
for (i = 15 ; i>=1 ; i= i-2){
    console.log(i)
}

console.log("loop statements odd numbers order")
for ( i = 1 ; i<=15 ; i = i+2){
    console.log(i)
}

console.log("loop statements even numbers order")
for ( i = 2 ; i <= 10 ; i = i+2){
    console.log(i)
}

//infinte loops
//these won't run in your web site 

// console.log("loop statements even numbers order")
// for ( i = 1 ; i >= 0 ; i++){
//     console.log(i)
// }

// print tables 
console.log("tables")
let n = prompt("Enter your number");
n = parseInt(n);
for (i=n;i<=n*10;i=i+n){
    console.log(i)
}