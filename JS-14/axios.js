// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let responce = await axios.get(url);
//         console.log(responce.data.fact);

//         let responce2 = await axios.get(url);
//         console.log(responce2.data.fact);

//         let responce3 = await axios.get(url);
//         console.log(responce3.data.fact);
//     }
//     catch (e) {
//         console.log(`Error -- ${e}`);
//     }
// }

// getFacts();



//sending headers 


let url2 ='https://icanhazdadjoke.com/'

async function joke() {
    try {
        const config = { headers : {Accept: 'application/json'}} // to give responce in json format
        let responce = await axios.get(url2 , config);
        console.log(responce.data.joke);
    }
    catch (e) {
        console.log(`error -- ${e}`);
        return '/'
    }
}
