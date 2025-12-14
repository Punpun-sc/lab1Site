

const nav = document.getElementById("slideoutNav");
const hamburger = document.getElementById("hamburger");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const wordLidBtn = document.getElementById("Kernwaarden-visible");

wordLidBtn.addEventListener("click", () => {
    
});

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

openBtn.addEventListener("click", () => {
    popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("active");
    }
});

