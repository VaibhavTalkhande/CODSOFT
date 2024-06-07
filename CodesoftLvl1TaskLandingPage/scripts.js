function displayNav(){
    var navMenu=document.getElementById('navbar')
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
}
var navi=document.getElementById('menu-btn')
navi.addEventListener('click',displayNav)
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for getting in touch!');
});

