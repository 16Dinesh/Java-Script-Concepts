//array methods

// map

let arr = [1,2,3,4,5,6];

let newArr = arr.map( (el) => {
    return el * el;
});

console.log(newArr)

console.log(`--------------------`);

//for Each
//Printing elements of an array
let arr1 = [1,2,3,4,5];
arr.forEach((el) => {
    console.log(el);
})

console.log(`--------------------`);
// /Doubling each element of an array in forEach

let arr2 = [1,2,3,4,5];
let newArr1 = [];
arr.forEach((el) => {
    newArr1.push(el *2);
})

console.log(newArr1)

console.log(`--------------------`);

let arr3 = [1, 2, 3, 4, 5];
arr3.forEach((el) => {
    if (el % 2 === 0) {
        console.log(el);
    }
});

console.log(`--------------------`);

//filter

let num = [1,2,3,4,5,6,7,8,9];
let even  = num.filter((el) => (el%2 ==0));
console.log(even);

let num1 = [1,2,3,4,5,6,7,8,9,0];
let odd  = num1.filter((el) => (el%2 !=0));
console.log(odd);

console.log(`--------------------`);

//every  --AND rule

//Check if all strings have length greater than 3

let words = ["apple", "banana", "orange"];
let strLen3 = words.every((el) => el.length > 3);
console.log(strLen3)

//check all number are postive

let allpstive = num.every((el) => el > 0 );
console.log(allpstive);

//Check if all elements are arrays

let array = [[1, 2], [3, 4], [5, 6]];
let allArrays = array.every((item) => Array.isArray(item));
console.log(allArrays); 
console.log(`--------------------`);

//some  -- OR Rule

//check if a least to find one -ve value;

let neNum = [1,2,4,-5,8,9,0];
let hasNegive = neNum.some((ek) => ek<0);
console.log(hasNegive);

//Check if there is at least one empty string

let exStr = ["gandu","Brutu","",'harshini'];
let emptyStr = exStr.some( (el) => el === "");
console.log(emptyStr);

console.log(`--------------------`);

//reduce 

let arr4 = arr.reduce((res,el) => (res+el));
console.log(arr4);

//or

let arr5 = arr.reduce((res,el) => (res+el) , 1); // if or to set value of accumulator to a default staring value
console.log(arr5);

//find max in arr

let max = arr.reduce((max , el) => {
    if (max < el ){
        return el;
    }else {
        return max;
    }
});

console.log(max);

console.log(`--------------------`);


//default parameters 

function func1(a =2 ,b =2){
    return a*b;
}

console.log(func1());

function func(a  ,b =2){
    return a*b;
}

console.log(func(10));


console.log(`--------------------`);

//spread 


let newS = Math.min(...arr);
console.log(newS)

let names = ["gandu","Brutu",'harshini','varshi','pakshini','thushini','yepushini','karashi',"takashi"];
let spdNames = [...names];
spdNames.push("dinseh",'varsha');
console.log(spdNames);

let logArry = [...arr];
console.log(logArry);
logArry.pop()
console.log(logArry.pop());

console.log(`--------------------`);

//with objects 

let data = {
    email : "varashaRB13@gmail.com",
    password : "Varsha13",

}

let copydata = { ...data , id : 21}; // for storing id for the cody the origin data.
console.log(copydata);

let obj1 = { ...logArry};  // convets them array to objects 
console.log(obj1);


let obj2 = {...names};
console.log(obj2);

let str = {..."hello"};
console.log(str)


console.log(`--------------------`);

//rest -- opposite of spread

function sum (...args) {
    for(let i=0 ; i<args.length; i++){
        console.log(`you gave us: ${args[i]}`);
    }
};

sum(names);

function min(msg , ...args) {
    console.log(msg);
       return args.reduce((min,el) => {
        if (min>el){
            return el;
        }else {
            return min;
        }
    });
};
let arr6 = [3, 10, 5, 2, 4];
console.log(min("this is the final arr", ...arr6));
console.log(`--------------------`);


// destruction 

//with array
let [fellow, dog ,...others]= names ;
console.log(dog);
console.log(fellow);
console.log(others)

//with objects 

const Bio = {
    name : "Brutu",
    bread : "doberman",
    age : 2,
    dogAge : 21,
    Sex : "Male",
    patners : "none",
    owners : "Free AS fuck",
    cards : 0,
};

let {name : kukaperu , age:Kukavayasu} = Bio;
console.log(kukaperu);
console.log(Kukavayasu);

