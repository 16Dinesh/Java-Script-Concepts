// in olden days XML HTTP Request Object

//now fetch (url);


let url = "https://catfact.ninja/fact";



// fetch(url)          // it return in promise
// .then( (responce) => {
//     console.log(responce);
//     // console.log(responce.json())
//     responce.json().then ((data) => {    // it retuns in readble form in object //.json()//
//         console.log(data)     
//       })
// })
// .catch ((err) => {
//     console.log(`Given error ${err}`);
// })



// another was understanble way
// fetch(url)          
// .then( (responce) => {
//         return responce.json();
// })
// .then((data) => {
//     console.log(data.fact);
//     return fetch(url)
// })
// .then((responce) => {
//     return responce.json();
// })
// .then((data1) => {
//     console.log(data1.fact)
// })
// .then((responce) => {
//     return responce.json();
// })
// .then((data2) => {
//     console.log(data2);
// })
// .catch ((err) => {
//     console.log(`Given error ${err}`);
// })

//using async-await functions this more readble and understanble

async function getFact() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact)

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact)

        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.fact)
    }
    catch (err) {
        console.log(err);
    }

}
getFact();