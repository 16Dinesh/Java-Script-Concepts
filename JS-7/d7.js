//this 

const stud = {
    name : "brutu",
    age : 23,
    eng : 21,
    math : 21,
    phy : 5,
    get avg() {
        let avg = (this.eng + this.math + this.phy)/3;   // 
        console.log(avg);
    }
};

console.log(stud.name);
console.log(stud.avg);
console.log(`-----------------`);

// try and catch


console.log("hello");
console.log("hello");
try {
    console.log(a);
} catch {
    console.log("the varible a not got compiled")
};
console.log("hello");
console.log("hello");
console.log(`-----------------`);

// arrow functions 

const sum = (a,b) => {
    console.log(a+b);
};
sum(1,2);

console.log(`-----------------`);


const mult = (a,b) => {
    return a*b;
}

console.log(mult(2,4));

console.log(`-----------------`);


const sub = (a,b) => {
    return (a-b);
};

console.log(sub(4,2));
console.log(`-----------------`);

const sum1 = (a,b) => a+b;
console.log(sum1(1,2));

const sub1 = (a,b) => a-b;
console.log(sub1(1,2));

const multi1 = (a,b) => a*b;
console.log(multi1(1,2));

console.log(`-----------------`);


// time-out funtions 

// setTimeout ( () => {
//     console.log("brutu")
// },4000);


// set Interval Funtions 

// let printBrutu = setInterval( () => {console.log("brutu2")},2000);
// console.log(printBrutu);



// setTimeout(()=> 
//     clearInterval(printBrutu),
//  10000);


 console.log(`-----------------`);




 function Person() {
this.age = 2;

setInterval(() => {
    this.age++; // `this` properly refers to the person object
}, 4000);
}

const p = new Person();


console.log(p);

const arravg = (arr) => {
    let total = 0 ;
    for (let number of arr) {
        total += parseInt(number) 
    }
    return total / arr.length;
};

let arr = ["5","2",'2','5'];
console.log(arravg(arr));