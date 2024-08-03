let title =  document.querySelector("#company")
title.innerHTML = "<h3>Dom-Demo</h3>";
const openNav = document.querySelector(".open")
const closeNav = document.getElementById("close")
const sideNavBar = document.querySelector(".sidenav")
const para = document.querySelectorAll("p");
openNav.addEventListener('click', toggleSideNavBar);
closeNav.addEventListener('click', toggleSideNavBar);

for(paras of para ) {
    paras.textContent = "The values of P changed Using for of loop"
}

let isDarkTheme = false;

const darkTheme = function() {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".dark-theme").textContent = "Light Theme"
    document.querySelector("header").style.backgroundColor = "#2E282A"
    document.querySelector(".sidenav").style.backgroundColor = "#808A9F"
}

const lightTheme = function() {
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector(".dark-theme").textContent = "Dark Theme"
    document.querySelector("header").style.backgroundColor = "#F86624"
    document.querySelector(".sidenav").style.backgroundColor = "#1768AC"
}

let theme = ()=> {
    if (isDarkTheme) {
        lightTheme();
    } else {
        darkTheme();
    }
    isDarkTheme = !isDarkTheme;
}


function myFunction(e) {
    e.classList.toggle("change");
  }

function toggleSideNavBar() {
    sideNavBar.classList.toggle("mango");
    myFunction(openNav);
    myFunction(closeNav);
}

function eleHover(element) {
    element.style.backgroundColor = "white";
    document.querySelector(".main").style.cursor= "pointer";
}

function eleOut(item) {
    item.style.backgroundColor = "#DEE7E7"
}