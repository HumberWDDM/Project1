// add a smooth scroll effect when navigation links are clicked

const navigation = document.querySelectorAll("nav a");

function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
        behavior: "smooth"
    });
}

for (let navElement of navigation) {
    navElement.addEventListener("click", smoothScroll);
}


// Change colour of navigation bar element upon scroll
const navBar = document.querySelector(".nav_container");

// Function to handle scroll event
function handleScroll() {
    if (window.scrollY > 30) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleScroll);
