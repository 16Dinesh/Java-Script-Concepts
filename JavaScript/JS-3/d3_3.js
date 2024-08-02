// array methods 

//push  ---> to add in the back of the array 

let haram = ["good","bad","evil"];

// nam
// (3) ['good', 'bad', 'evil']
// nam.push("badass")
// 4
// nam
// (4) ['good', 'bad', 'evil', 'badass']


//pop ---> to remove the back of the array

let poop = ["web", "rush" , 'rest'];

// poop
// (3) ['web', 'rush', 'rest']
// poop.pop()
// 'rest'
// poop
// (2) ['web', 'rush']

// unshift ---> to add in the start of the array 

let human = ['eyes',"nose",'mouth','ears']

// human
// (4) ['eyes', 'nose', 'mouth', 'ears']
// human.unshift("face -")
// 5
// human
// (5) ['face -', 'eyes', 'nose', 'mouth', 'ears']

// shift --> to remove the start of the array

let phone = ["mobile","processer","camera","display"];

// phone
// (4) ['mobile', 'processer', 'camera', 'display']
// phone.shift()
// 'mobile'
// phone
// (3) ['processer', 'camera', 'display']


// task --  to know the blocked data form the array

let lappy = ['laptop','intel','camera', 'display','ports']
let newLappy = lappy.shift()
console.log(newLappy)// -- to know the removed content form the array 
console.log(lappy)