 // arrray references

 // array will store the data in from of address not bt the data types and the copy of the new array has also same address 

//ex:
//  let arr = ['a','b']
//  let newarr = arr;
//  undefined
//  arr
//  (2) ['a', 'b']
//  newarr
//  (2) ['a', 'b']
//  arr.push('c')
//  3
//  arr
//  (3) ['a', 'b', 'c']
//  newarr
//  (3) ['a', 'b', 'c']

// in string the value type of the other is same then it retuns as ture  but where as in the array the it retuns as false 

// let arr = ["asd"]
// let num = 23

// let asd = 23
// undefined
// asd == num
// true787
// asd === num
// true
// asd === arr
// false

// let rr = ['sergt'] 
// undefined
// arr == rr
// false
// arr ==== rr
// VM7209:1 Uncaught SyntaxError: Unexpected token '='
// rr === arr
// false


// constant array
 
const arr = [2,3,4,5,6]

//in const you can't make changes completely but we can use push and pop functions 

// nested array

let num = [[2,3],[3,3],[2,1]];

//the array is divided into a matrix form which we can assces the data with num = [][];
// where row and coloum
// num [row] [col]

