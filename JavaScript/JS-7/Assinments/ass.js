const arravg = (arr) => {
    let total = 0 ;
    for (let number of arr) {
        total += number 
    }
    return total / arr.length;
};



let arr  = [1, 2, 3, 4, 5, 6];
console.log(arravg(arr));


let num = 2 ; 
const isEven = (num) => num % 2 == 0;
