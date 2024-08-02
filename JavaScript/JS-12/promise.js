let h1 = document.querySelector('h1')

function changeColor (color , delay ) {
   return new Promise ((resove , reject) => {
        setTimeout( () => {
            h1.style.color = color;
            resove("color changed");
        }, delay);
    })

}

changeColor('red' ,1000)
.then(() => {
    console.log(`red is completed`);
    return changeColor('green' ,1000);
})
.then( () => {
    console.log(`green is completed`);
    return changeColor('blue' ,1000) 
})
.then (() => {
    console.log(`blue is completed`);
    return changeColor('yellow' ,1000);
})
.then (() => {
    console.log(`yellow is completed`);
    return changeColor('grey' ,1000);
})
.then(() => {
    console.log(`grey is completed`);
    return changeColor('Black' ,1000);
})
.then (()=> {
    console.log(`black is completed`)
})
.catch (() => {
    console.log('color is completed')
})