// functions

function hello() {
    console.log(`hello`);
};

hello()
// a dice roll 1 to 6 
console.log(`-----------------`);
function dice() {
    let random = Math.floor(Math.random() * 6)+1 ;
    console.log(random); 
}
dice();

console.log(`-----------------`);
//functions with arguments 

function printName (Name , age){
    console.log(`${Name}, ${age}`);
};

printName("Dinesh", 21);

console.log(`-----------------`);
// function which gives avg of 3 numbers 

function numAvg (a,b,c){
    let avg = a+b+c/2;
    console.log(avg);
};

numAvg(1,2,4);

console.log(`-----------------`);
//Multipication table using Functions

function tables( a ){
    for (i=a ; i<= a * 10 ; i+= a){
        console.log(i);
    }
};

tables(6);

console.log(`-----------------`);


//return Keyword 

function sum(a ,b ) {
    return a+b;
}
console.log(sum(2,3));

console.log(`-----------------`);

console.log(sum(sum(2,3),3));  // for 3 numbers 

console.log(`-----------------`);

// sum of number from 1 to n 

function valSum(n) {
    for (i=1 ; i <= n ; i++){
        valSum+=i;
        console.log(i)
    }
}

valSum(6);

function valSum(n) {
    for (i=1 ; i <= n ; i++){
        valSum+=i;
        console.log(i)
    }
}

console.log(`-----------------`);

// in retun function 

function calSum (n) {
    let sum =0;
    for (let i =1 ; i<=n ; i++){
        sum+=i;                        //douth
    }
    return sum;
}

console.log(calSum(10));

console.log(`-----------------`);

let arr = ["this","is",'the','concat','function'];

function concat(arr){
    let result="";
    for (i=0;i<arr.length;i++){
        result += arr[i];
    }
    return result;
}

console.log(concat(arr))

console.log(`-----------------`);

let greet = "hello";
function changeGreet() {
    let greet = "nameste";
    console.log(greet);
    function innerGreet() {
        console.log(greet)
        console.log("inner Greet Nameste");
    }
    return innerGreet();
}

console.log(greet);
changeGreet()


console.log(`-----------------`);

 //higher order functions

function multipleGreet(func , n) {
for(let i = 1 ; i<=n ; i++){
    func();
}
}
let greet1 = function() {
    console.log("Dinesh");
}

console.log( multipleGreet(greet1 , 10));

console.log(`-----------------`);

function oddEvenTest(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    }
    else if (request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } 
    else {
        console.log("worng request");
    }
}

console.log(`-----------------`);

//methods

const cal = {
    add(a,b) {
        return a +b ; 
    },
    sub(a,b) {
        return a-b ;                 //shorthand method 
    },
    mult(a,b) {
        return a*b ; 
    },
    
};

console.log(cal.add(1,2));
console.log(cal.mult(1,2));
console.log(cal.sub(1,2));

console.log(`-----------------`);

const calu = {
    add : function (a ,b ) {
            return a + b;
    },
    multi : function (a ,b ) {
        return a * b;
    },
    sub : function (a ,b ) {
    return a - b;
    }
}

console.log(calu.add(1,2));
console.log(calu.multi(1,2));
console.log(calu.sub(1,2));

console.log(`-----------------`);