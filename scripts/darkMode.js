'use strict';

function getMode() {
    if (localStorage.getItem("mode") === "dark-mode") {
        document.body.classList.toggle("dark-mode");
    }
}

function darkMode() {
        document.body.classList.toggle("dark-mode");
        if (localStorage.getItem("mode") === "dark-mode") {
            localStorage.setItem("mode", "");
        }
        else {
            localStorage.setItem("mode", "dark-mode");
        }
        // localStorage.toggle("mode", "dark-mode");
    }
     
// function lightMode() {
//         document.body.classList.toggle("light-mode");
//         localStorage.setItem("mode", "light-mode");
// }

//  function darkMode() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
//     let element2 = document.getElementById("dark-mode-button");
//     element2.classList.toggle("dark-mode");
//     if (element2.innerHTML === "Dark Mode") {
//         element2.innerHTML = "Light Mode";
//     }
//     else {
//         element2.innerHTML = "Dark Mode";
//     }
//  }