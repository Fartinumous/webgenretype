window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 400
});

ScrollReveal().reveal('.main-title', {delay: 200, origin: 'left'});
ScrollReveal().reveal('.secImg', {delay: 300});
ScrollReveal().reveal('.text-box', {delay: 400, origin: 'right'});
