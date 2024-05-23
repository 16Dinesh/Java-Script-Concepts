let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('#btn');

// btn.addEventListener('click' , async () => {
//     let country = document.querySelector('input').value;
//     // console.log(country)
//     let collArr = await getColleges(country)
//     // console.log(collArr);
//     show(collArr);
// })

// function show (collArr) {
//     let list = document.querySelector('#list');
//     for (col of collArr){
//         // console.log(col.name);
//         // console.log(col.state-province)
//         console.log(col)

//         let li = document.createElement('li');
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country) {
//     try {
//        let responce = await axios.get(url + country);
//         // console.log(responce.data[0].name)
//         return responce.data
//     }catch (e) {
//         console.log(`error -- ${e}`);
//         return "not found"
//     }

// }


//v2

btn.addEventListener('click', async () => {
    let country = document.querySelector('input').value;
    if (country.trim() === "") {
        alert("Please enter a country name");
        return;
    }
    let collArr = await getColleges(country);
    show(collArr);
});

async function getColleges(country) {
    try {
        let response = await axios.get(url + country);
        return response.data;
    } catch (e) {
        console.log(`error -- ${e}`);
        return [];
    }
}

function show(collArr) {
    let list = document.querySelector('#list');
    list.innerHTML = '';                                    
    for (let col of collArr) {
        let li = document.createElement('li');
        let stateProvince = col["state-province"] ? col["state-province"] : 'N/A';  //if else statement
        li.innerText = `${col.name} \n(${stateProvince})`;
        list.appendChild(li);
    }
}
