// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e) {
    e.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    })
})

//send message on whatsapp

function whatsapp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var number = document.getElementById("number").value;
    var message = document.getElementById("Message").value;
    var url = "https://wa.me/+919987603256?text=" +
        "*Name* : " + name + "%0a" +
        "*Email* : " + email + "%0a" +
        "*Address* : " + address + "%0a" +
        "*Number* : " + number + "%0a" +
        "*Message* : " + message;

    window.open(url, '_blank').focus();
}


// ================splash screen===================== 

var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    loader.style.display = "none";
})