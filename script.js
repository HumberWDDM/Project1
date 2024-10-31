// add a smooth scroll effect when navigation links are clicked
const navigation = document.querySelectorAll("a");
function smoothScroll(event) { // listens for mouse click to make scrolling smooth (mouse event 1)
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
function handleScroll() { // listens for mouse scroll to  change nav bar colour (mouse event 2)
    if (window.scrollY > 30) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleScroll);
