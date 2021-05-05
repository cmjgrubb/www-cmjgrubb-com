"use strict";

document.getElementById("menu-icon").addEventListener("click", showMenu);
document.getElementById("homeBtn").addEventListener("click", showHome);
document.getElementById("b0001Btn").addEventListener("click", showb0001);
document.getElementById("b0002Btn").addEventListener("click", showb0002);
document.getElementById("b0003Btn").addEventListener("click", showb0003);
document.getElementById("t0001Btn").addEventListener("click", showt0001);
document.getElementById("t0002Btn").addEventListener("click", showt0002);

function showHome() {
    document.getElementById("articleId").innerHTML = '<h2 class="post">Who Is This Guy?</h2><p class="post">Craig has been an IT professional for eight years, mostly as a systems administrator. He has had the pleasure of working with some very smart men and women and has done his best to soak up as much as he can. He is lucky enough to be in a leadership position with an organization that understands the importance of technology in trying to achieve its goals.</p><p class="post">Outside of technology, Craig enjoys playing guitar, hiking, and most importantly, spending time with his wife and son.</p><p class="post">This website is his springboard into the next adventure of becoming a developer.</p>';
}

function showb0001() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonArt = JSON.parse(this.responseText);
            document.getElementById("articleId").innerHTML = jsonArt.articleContent;
        }
    };
    xmlhttp.open("GET", "b0001.json", true);
    xmlhttp.send();
}

function showb0002() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonArt = JSON.parse(this.responseText);
            document.getElementById("articleId").innerHTML = jsonArt.articleContent;
        }
    };
    xmlhttp.open("GET", "b0002.json", true);
    xmlhttp.send();
}

function showb0003() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonArt = JSON.parse(this.responseText);
            document.getElementById("articleId").innerHTML = jsonArt.articleContent;
        }
    };
    xmlhttp.open("GET", "b0003.json", true);
    xmlhttp.send();
}

function showt0001() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonArt = JSON.parse(this.responseText);
            document.getElementById("articleId").innerHTML = jsonArt.articleContent;
        }
    };
    xmlhttp.open("GET", "t0001.json", true);
    xmlhttp.send();
}

function showt0002() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonArt = JSON.parse(this.responseText);
            document.getElementById("articleId").innerHTML = jsonArt.articleContent;
        }
    };
    xmlhttp.open("GET", "t0002.json", true);
    xmlhttp.send();
}

function showMenu() {
    document.getElementById("menuDropdown").classList.toggle("show");
}

// Closes menu when clicking anywhere on the screen
window.onclick = function (event) {
    if (!event.target.matches('.hamburger')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}