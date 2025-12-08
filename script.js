function openOverlay() {

}
let nav = document.getElementById("slideoutNav");
let hamburger = document.getElementById("hamburger");

function closeOverlay() {
    nav.style.visibility = "hidden";
    hamburger.checked = false;
}

function openNav() {
    if (hamburger.checked) {
        nav.style.visibility = "visible";
    } else {
        nav.style.visibility = "hidden";
    }
}
