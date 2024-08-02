// creating objects 

let students = {
    name : "Gandu",
    age : 19,
    city : "hyd"
};

// for accesing in the console 

// students.name; --> Gandu
//or 
// students["name"]; --> GAndu

//for Updation in the object

// students.name = "VArsha";

//nested objects 

let classInfo = {
    gandu : {
        grade : "A",
        City : "hyd"
    }, 
    Brutu : {
        grade : "A",
        city : "VRC"
    },
    bata : {
        grade : "F",
        city : "Unknown"
    }
};


// array in objects 

let info = [
    {
    name : "Gandu",
    city : "hyd",
    type : "Semi-Female"
    },
    {
        name : "Brutu",
        city : "VRC",
        type : "It's a dog"
    },
    {
        name : "Bata",
        city : "Unknown",
        type : "Cloth in Telugu"
    }
];

// Math obejcts 

// Math.PI
// 3.141592653589793
//  Math.E
// 2.718281828459045
//  Math.abs(-10)
// 10
//  Math.abs(10)
// 10
//  Math.pow(10 , 10)
// 10000000000
//  Math.pow(2 , 2)
// 4
//  Math.floor(9.5)
// 9
//  Math.ceil(9.5)
// 10
//  Math.random()
// 0.5048928603295402

//mdm

const person = {
    name : {
        first : "Brutu",
        last : "Gandu",
    }
};


console.log(person.name.first);
//or
console.log(person['name']['last']);

const person1 = {
    name : ["gandu", "brutu"],
    age: 32,
};

console.log (person1.name[0]);

function logProperty (logName) {
    console.log(person1[logName]);
};

logProperty ("name");

logProperty ("age");