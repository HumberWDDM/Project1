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

// mouse click event to alternate the border btw the Book a Table button and Open menu button upon click
const bookButton = document.getElementById("book_btn");
const menuButton = document.getElementById("menu_btn");

bookButton.addEventListener("click", () => {
    // now, add a border to "Book a Table" button and remove border from "Open Menu" button
    bookButton.style.border = "2px solid white";
    menuButton.style.border = "none";
});

// Set up click event for "Open Menu" button
menuButton.addEventListener("click", () => {
    // Add border to "Open Menu" and remove from "Book a Table"
    menuButton.style.border = "2px solid white";
    bookButton.style.border = "none";
});


// animation for images upon mouse hover
function zoomOut(event){
    event.preventDefault();
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform 0.3s ease";
}

function zoomIn(event){
    event.preventDefault();
    this.style.transform ="scale(1)";
}

const Img = document.querySelectorAll(".rgt");
console.log(Img);
Img.forEach(image => {
    image.addEventListener("mouseenter", zoomOut);
    image.addEventListener("mouseleave", zoomIn);
})

// Animation for ripple effect for when a button is clicked
function rippleEffect(event) {
    event.preventDefault();
    
    const rippleElement = document.createElement('span');
    rippleElement.classList.add('ripple');

    // Get the position of the button
    const rect = this.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height);
    
    // Set the size of the ripple
    rippleElement.style.width = rippleElement.style.height = `${size}px`; 

    // Position the ripple at the click location
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    rippleElement.style.left = `${x}px`;
    rippleElement.style.top = `${y}px`;
    
    this.appendChild(rippleElement);
    
    // Remove the ripple element after the animation ends
    rippleElement.addEventListener('animationend', () => {
        rippleElement.remove();
    });
}

// apply ripple effect to book a table and Open menu buttons
const bookAndMenuButtons = document.querySelectorAll('.cta-buttons button');
bookAndMenuButtons.forEach(button => {
    button.addEventListener("click", rippleEffect);
});
