let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
//elements larger than a number num
function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElements(arr, num);






let str = "abcdabcdefggghmnljhbjhhhj";
//function to get String with all unique elements
function getUnique(str) {
let ans = "";
for (let i = 0; i < str.length; i++) {
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1) {
    //if current character is not added, then add it in   ans.

    //Otherwise it is a duplicate.
        ans += currChar;
        }
    }
    return ans;
}

getUnique(str);





let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {

    let ansIdx = 0;
for (let i = 0; i < country.length; i++) {
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if (currLen > ansLen) {
        ansIdx = i;
        }
    }
    return country[ansIdx];
}

longestName(country);





let str1 = "apnacollege";
function countVowels(str1) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
    if (
        str.charAt(i) == "a" ||
        str.charAt(i) == "e" ||
        str.charAt(i) == "i" ||
        str.charAt(i) == "o" ||
        str.charAt(i) == "u"
    )   {
        count++;
    }
}
return count;
}




let start = 100;
let end = 200;
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
