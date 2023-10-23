const menuShadow = document.getElementsByTagName("header")[0];
const openMenu = document.getElementsByClassName("open-menu")[0];
const closeMenu = document.getElementsByClassName("close-menu")[0];
const navMenu = document.getElementsByClassName("mobile-nav")[0];

function openNavigation() {
menuShadow.style.boxShadow = "0 0rem 50rem 15rem #2d314d";
openMenu.style.display = "none";
closeMenu.style.display = "inherit";
navMenu.style.display = "flex";
}

function closeNavigation() {
menuShadow.style.boxShadow = "0 0rem 50rem 15rem #2d314d00";
openMenu.style.display = "inherit";
closeMenu.style.display = "none";
navMenu.style.display = "none";
}