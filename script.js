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

//To validate the newsletter form and ensure the email is correctly formatted before accepting the subscription
function submitSubForm(event){
    event.preventDefault();
    const emailInput = this.querySelector("input[type='text']"); // the email input element
    const email = emailInput.value; //get the real email entered in the email input
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //general pattern of an email(e.g., trust123@humber.ca)

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
    } else {
        alert("Thank you for subscribing!");
        this.reset();// clear the email input element
    }

}
const newsletterForm = document.querySelector("form");
newsletterForm.addEventListener("submit", submitSubForm);


