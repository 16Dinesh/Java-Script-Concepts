// this code used to make changes to the one or more images to display same image on Loop;

// let smallimg = document.querySelectorAll('.images img');

// // let smallimg = document.getElementsByClassName("images");
// for (let i = 0; i < smallimg.length; i++) {
//     smallimg[i].src = "http://127.0.0.1:5500/Project/online/JS/day-9/DOM/assets/spiderman_img.png";
//     console.log(`Image at index ${i} has been changed`);
// }

//query Comands in console

// let p = document.querySelector('.box a');  // nesting 

// let a = document.querySelectorAll('.box a' );  // selectect all give in the node list 

// p  --> Returns the value 
// <a href=​"#" class=​"boxLink">​Publisher​</a>​


// a  --> Returns the value 
// NodeList(4) [a.boxLink, a.boxLink, a.boxLink, a.boxLink]


// let para = document.querySelectorAll("p")  // Select the all the p tags

// para  --> Returns the value
// NodeList(2) [p, p#description]0: p1: p#descriptionlength: 2[[Prototype]]: NodeList


// para.innerText --> Returns the value
 
// para[0].innerText  // Returns the value of the Para - 1st
// 'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has been featured in comic books, television shows, films, video games, novels, and plays'


// para[1].innerText  // Return the value of the para - 2nd
// 'In 1962, with the success of the Fantastic Four, Marvel Comics editor and head writer Stan Lee was casting for a new superhero idea. He said the idea for Spider-Man arose from a surge in teenage demand for comic books and the desire to create a character with whom teens could identify. As with Fantastic Four, Lee saw Spider-Man as an opportunity to "get out of his system" what he felt was missing in comic books. In his autobiography, Lee cites the non-superhuman pulp magazine crime fighter the Spider as a great influence, and in a multitude of print and video interviews, Lee stated he was further inspired by seeing a spider climb up a wall—adding in his autobiography that he has told that story so often he has become unsure of whether or not this is true.'


// para[0].innerText = "doen with the the para 1"  // to change the para 
// 'doen with the the para 1'


// para[1].innerText = "Done with the para 2 "   // to change the para
// 'Done with the para 2 '



//innerText, textContent , innerHTML;



// para[0].textContent        //   -->  \n indicate in the HTML para Line by Line 
// '\n      Spider-Man is a superhero appearing in American comic books\n    
//   published by\n      Marvel Comics.\n      Created by writer-editor Stan Lee and artist Steve Ditko, he\n   
//      first appeared in the anthology comic book\n      
//      Amazing Fantasy\n      #15 (August 1962) in the Silver Age of Comic Books. He has\n  
//          been featured in comic books, television shows, films, video games,\n      
//          novels, and plays\n    '


// para[0].innerHTML       //  -->   Shows the inner All the HTML elements in the para 
// '\n      <b>Spider-Man</b> is a superhero appearing in American comic books\n      published by\n     
//  <a href="https://www.google.com/search?q=Marvel+Comics">Marvel Comics</a>.\n      Created by writer-editor 
//<b>Stan Lee</b> and artist <b>Steve Ditko</b>, he\n      first appeared in the anthology comic book\n     
//   <a href="https://www.google.com/search?q=Amazing+Fantasy">Amazing Fantasy</a>\n     
//    #15 (August 1962) in the <a href="#">Silver Age of Comic Books</a>. He has\n      
//    been featured in comic books, television shows, films, video games,\n      
//    novels, and plays\n    '

// Manipulating Attributes 


// to accessing the class or id using the Attribute 


// let img = document.querySelector("img")

// img.getAttribute('id')
// 'mainImg'               --> Return the id the HTML


// let para = document.querySelector("p")

// para    --> Returns the value 
// <p>​…​</p>​


// para.getAttribute("class")          // if there is no class or id it Gives the null as the output
// null
// para.getAttribute("id")
// null


// para.setAttribute("id" , " paratag")            //  to set the id in the p tag
// para.setAttribute("Class" , " classparatag")    // to set the class in the p tag 


// style attribute

// let para = document.querySelector("p")

// para   --> Returns the value 
// <p>​…​</p>​

// para.style.backgroundColor = "red"   // change the bgcolor with style attribute 
// 'red'
// para.style.color = "Black"           // changes the Text color  with style attribute 
// 'Black'

////        -->  loop to color change 

// let links = document.querySelectorAll('.box a');

// for(link of links){
//     link.style.color="red";
// }


////   --> class list property

// let para = document.querySelector("p")  

// para.classList.add('oldpara')           // (add) new class

// para.classList.remove('oldpara')        // (remove) the class if not null

// para.classList.contains('Nerpara')       // (Contains) returns the true or False
// false
// para.classList.remove('oldpara')

// para.classList.add('Nerpara')

// para.classList.contains('Nerpara')
// true

// let para = document.querySelector("p")

// para.classList.add('green') 

// para.classList.toggle('green')    // (toggle) to toggle b/n add and remove the class 
// false
// para.classList.toggle('green')
// true

// // Navigation on the page 

// let ul = document.querySelector('ul')   --> Selected the the middle element 

// ul.parentElement    --> return the parent of the element or null
// <div class=​"box">​…​</div>​

// ul.children       --> returns the no.of children with the index  
// HTMLCollection(3) [li, li, li]

// ul.childElementCount   --> Returns the count of the children
// 3

// ul.nextElementSibling   --> returns null if not found 
// null

// ul.children[0].nextElementSibling   --> return the outputs of the next sibling 
// <li>​…​</li>​

// ul.children[2].nextElementSibling     --> this the last sibling so it returns null value
// null                  


// change color (h1) to (green) using Navigation 

// let imag = document.querySelector('img')

// imag   --> Returns the value
// <img src=​"assets/​spiderman_img.png" id=​"mainImg">​

// imag.previousElementSibling.style.color = "green";    --> change the color to green
// 'green'

//adding elements 

// let div = document.querySelector('.box')  --> to select the div box 

// let para = document.createElement('p');   --> to Create an Element 
  
// div.appendChild(para)  --> take only one node 
// <p>​</p>​

// para.innerText = "this the new para"      --> to add the text 
// 'this the new para'                        // append add to the last of the element

// let btn = document.createElement('button')  -->ex2

// div.appendChild(btn)
// <button>​</button>​
// btn.innerText = "Button"
// 'Button'

// div.prepend(btn)   // same as like append but it will add to the first of element

// div.append(btn) // add to the last

// para.innerText = "Hello Gandu" 
// 'Hello Gandu'
// var text = "hello how are you"
 //                                       --> directly make changes to the element 
// div.append(para , text)   // it can handle Multiple Arguments which is very fexilble 



// insert-Adjacent-Element (postion , Element)

// let odd = document.querySelector('p')

// let btn = document.createElement('button');

// btn.innerText = "click ME"
// 'click ME'

// odd.insertAdjacentElement('beforebegin' , btn)  --> before the element
// <button>​click ME​</button>​

// odd.insertAdjacentElement('afterbegin' , btn)   --> inside start of the element 
// <button>​click ME​</button>​

// odd.insertAdjacentElement('beforeend' , btn)  --> inside end of the element 
// <button>​click ME​</button>​

// odd.insertAdjacentElement('afterend' , btn)   --> after the end of the element 
// <button>​click ME​</button>​

//qs add a (btn) to the (p) and place after the para;

// let btn = document.createElement('button');

// btn.innerText = "Button";
// 'Button'

// let p = document.querySelector('p');
// p.insertAdjacentElement('afterend' , btn)

// Remove Elements 

// let p = document.querySelector('p');  // select the first p element 

// let btn = document.createElement('button');  // create the buttom

// p.insertAdjacentElement('afterend' , btn)     // add the p tag in the end 
// <button>​</button>​

// btn.innerText = "Button"
// 'Button'                                 // text to the btn

// btn.parentNode.removeChild(btn);         //  cuz its sibling wee use the parentNode to Remove the element 
// <button>​Button​</button>​

// p.remove()  -->  the remove elements form the page 