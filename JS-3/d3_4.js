// indexof method
//str.indexOf("__")
let watch = ['hands','numbers','digtal'];

//ex:
// watch
// (3) ['hands', 'numbers', 'digtal']
// watch.indexOf('numbers')
// 1
// watch.indexOf('none')
// -1



//includes  --> gives you boolen value 

//str.includes("__")

//ex:
// watch
// (3) ['hands', 'numbers', 'digtal']
// watch.includes('hands')
// true
// watch.includes('none')
// false




// concat --> concanate two strings 

// str1.concat(str2)

//ex:

let cat = ['eyes','nose','mouth','fur','colors']
let human = ['eyes','nose','mouth','hair','color']

// cat
// (5) ['eyes', 'nose', 'mouth', 'fur', 'colors']
// human
// (5) ['eyes', 'nose', 'mouth', 'hair', 'color']
// cat.concat('human')
// (6) ['eyes', 'nose', 'mouth', 'fur', 'colors', 'human']
// cat.concat(human)
// (10) ['eyes', 'nose', 'mouth', 'fur', 'colors', 'eyes', 'nose', 'mouth', 'hair', 'color']

// // this can also used as add to the back of the array 
// cat.concat("human")
// (6) ['eyes', 'nose', 'mouth', 'fur', 'colors', 'human']



//reverse  --> reverse the data inside the array

//str.reverse()

// //ex:
// cat
// (5) ['eyes', 'nose', 'mouth', 'fur', 'colors']
// cat.reverse()
// (5) ['colors', 'fur', 'mouth', 'nose', 'eyes']



//slice 
//--> copy of the portion of an array

//str.slice();
//str.slice(2,3);   ---> this will make copy of the exact data inside of the array 
//str.slice(-2);   --> this will come from the last of the array 

// //ex:
// cat
// (5) ['eyes', 'nose', 'mouth', 'fur', 'colors']
// cat.slice("eyes")
// (5) ['eyes', 'nose', 'mouth', 'fur', 'colors']
// cat.slice()
// (5) ['eyes', 'nose', 'mouth', 'fur', 'colors']
// cat.slice(2,3)
// ['mouth']
// cat.slice(-2)
// (2) ['fur', 'colors']


//splice 

//str.splice(3)  // remove from the array and give you as a new array
//str.splice(0,3) // remove part from the array and give you as a new array 
//str.splice(0,3, "__","__")  remove from the array and replace with new values 

//ex:

//1)
// cat
// (5) ['eyes', 'nose', 'mouth', 'fur', 'colors']
// cat.splice(3)
// (2) ['fur', 'colors']
// cat
// (3) ['eyes', 'nose', 'mouth']

//2)
// // cat
// (5) ['eyes', 'nose', 'mouth', 'fur', 'colors']
// cat.splice(0,3)
// (3) ['eyes', 'nose', 'mouth']
// cat
// // (2) ['fur', 'colors']
// cat
// (5) ['eyes', 'nose', 'mouth', 'fur', 'colors']
// cat.splice(0,2,'cute','moodswinggers')
// (2) ['eyes', 'nose']
// cat
// (5) ['cute', 'moodswinggers', 'mouth', 'fur', 'colors']

//to update the of the array fur to the hair and add breed 


//3)

// example

// cat
// (5) ['eyes', 'nose', 'mouth', 'fur', 'colors']0: "eyes"1: "nose"2: "mouth"3: "fur"4: "colors"length: 5[[Prototype]]: Array(0)
// cat.splice(3,5,'hair',"breed",'color')
// (2) ['fur', 'colors']
// cat
// (6) ['eyes', 'nose', 'mouth', 'hair', 'breed', 'color']


//sort


//str.sort() --> arrange in assending order with letter and but in number it gives in dessending 


//ex:
let num =  [1,2,3,4,5,6,,7,8,100]
let alp =  ['f','z','r','a','t','e','r','b','u','c']
let xo = ['W','E','E','K','N','D']


//1 is allways first in the sort()

// num.sort()
// (10) [1, 100, 2, 3, 4, 5, 6, 7, 8, empty]

 //alp
// (10) ['f', 'z', 'r', 'a', 't', 'e', 'r', 'b', 'u', 'c']
// alp.sort()
// (10) ['a', 'b', 'c', 'e', 'f', 'r', 'r', 't', 'u', 'z']


//xo
// (6) ['W', 'E', 'E', 'K', 'N', 'D']
// xo.sort()
// (6) ['D', 'E', 'E', 'K', 'N', 'W']

