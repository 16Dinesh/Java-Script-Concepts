// function one() {
//     return 1 ;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }


// three();

// let h2 = document.querySelector('h2')

// function changeColor (color , delay , nextcolor) {
//     setTimeout( () => {
//         h2.style.color = color;
//         if (nextcolor) nextcolor();
//     }, delay);
// }

// changeColor("red",1000, () => {
//     changeColor('green' , 1000 , ()=> {
//         changeColor('blue', 1000 , () => {
//             changeColor('yellow', 1000 , () => {
//                 changeColor('grey', 1000 , () => {
//                     changeColor('black', 1000)
//                 })
//             })
//         })
//     })
// }) ;


//setting promises

//   function savetoDb(data , success , failure) {
//     let internetSpeed = Math.floor(Math.random() *10 ) +1;
//     if(internetSpeed >4) {
//         success();
//     }else {
//         failure();
//     }
//   }

//   savetoDb( "dinesh" , () => {
//     console.log(`sus-1-your data is saved `);
//     savetoDb('Brutu' , ()=> {
//         console.log(`sus-2-your data2 is saved`)
//         savetoDb('dog' , () => {
//             console.log('sus-3-your data3 is saved')
//         } ,  () => {
//             console.log("weak connection")
//         })
//     }, () => {
//         console.log("-2-weak internet connection")
//     })
//   } , () => {
//     console.log(`weak internet connection . data not saved`)
//   })


//optimiting to promises


// function savetoDb(data) {
//     return new Promise ((resolve , reject) => {
//         let internetSpeed = Math.floor(Math.random() *10 ) +1;
//     if(internetSpeed >4) {                                               //main code
//         resolve("data was saved");
//     }else {
//         reject(`failure ; data was failed`);
//     }
//     });
// }

// .then() and .catch()

// let request = savetoDb("dinesh");
// request.then(() => {
//     console.log(`promise was resolved`)
//     console.log(request);
// })
// .catch (() => {
//     console.log(`pomise was rejected`)
//     console.log(request);
// } )

// savetoDb("dinesh")
//     .then(() => {
//         console.log(`promise was resolved`)
//     })                                                  //compact version 
//     .catch (() => {              
//         console.log(`pomise was rejected`)
//     } )



//promise chaining --> using muliple then()



// savetoDb("dinesh")
//     .then(() => {
//         console.log(`data-1-saved`)
//         savetoDb("brutu").then( () => {
//             console.log(`data-2-saved`)
//         })
//     })                                               
//     .catch (() => {              
//         console.log(`pomise was rejected`)
//     } )

// savetoDb("dinesh")
//     .then(() => {
//         console.log(`data-1-saved`)
//          return savetoDb("brutu")
//     })
//     .then( () => {
//         console.log("data-2-saved")
//         return savetoDb("dog");
//     })                        
//     .then( () => {
//         console.log('data-3-saved')
//     })                        
//     .catch (() => {              
//         console.log(`pomise was rejected`)
//     } )



// result and error 

// savetoDb("dinesh")
//     .then((result) => {
//         console.log(`data-1-saved :  ${result}` )
//          return savetoDb("brutu")
//     })
//     .then( (result) => {
//         console.log("data-2-saved : " , result)
//         return savetoDb("dog");
//     })                        
//     .then( (result) => {
//         console.log('data-3-saved' , result)
//     })                        
//     .catch ((error) => {              
//         console.log(`pomise was rejected ${error}`)
//     } )


//change color callback hell to the promises

let h2 = document.querySelector('h2')

function changeColor (color , delay ) {
   return new Promise ((resove , reject) => {
        setTimeout( () => {
            h2.style.color = color;
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