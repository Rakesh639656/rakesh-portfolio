// Header scroll
let nav = document.querySelector('.navbar');

window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add(".header-scrolled");
    }
    else{
        nav.classList.remove(".header-scrolled");
    }
}



// Nav hide

window.addEventListener('scroll', function() {
    var header = document.querySelector('.navbar');
    header.classList.toggle("sticky", window.scrollY > 0);
})
//   name type

var typed = new Typed('.type', {
    strings: [" Kumar", "Graphic Designer", "Web Designer", "Web Developer"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
    
});