const nav = document.getElementById("slideoutNav");
const hamburger = document.getElementById("hamburger");
const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

const contactOpenBtn = document.getElementById("openPopup");
const contactPopup = document.getElementById("popup");
const contactCloseBtn = document.getElementById("closePopup");

if (contactOpenBtn && contactPopup && contactCloseBtn) {
    contactOpenBtn.type = "button"; 

    contactOpenBtn.addEventListener("click", (e) => {
        e.preventDefault();
        contactPopup.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    contactCloseBtn.addEventListener("click", () => {
        contactPopup.classList.remove("active");
        document.body.style.overflow = "";
    });

    contactPopup.addEventListener("click", (e) => {
        if (e.target === contactPopup) {
            contactPopup.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}


const joinOpenBtn = document.getElementById("openJoinPopup");
const joinPopup = document.getElementById("joinPopup");
const joinCloseBtn = document.getElementById("closeJoinPopup");
const joinForm = document.getElementById("joinForm");

if (joinOpenBtn && joinPopup && joinCloseBtn) {
    joinOpenBtn.addEventListener("click", () => {
        joinPopup.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    joinCloseBtn.addEventListener("click", () => {
        joinPopup.classList.remove("active");
        document.body.style.overflow = "";
    });

    joinPopup.addEventListener("click", (e) => {
        if (e.target === joinPopup) {
            joinPopup.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

if (joinForm && joinPopup) {
    joinForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        joinPopup.classList.remove("active");
        document.body.style.overflow = "";
        joinForm.reset();
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (contactPopup) contactPopup.classList.remove("active");
        if (joinPopup) joinPopup.classList.remove("active");
        document.body.style.overflow = "";
    }
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
