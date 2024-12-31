 //---------------toggel icon navbar-----------
let toggelBtn = document.querySelector('.toggle-menu');
let navbar = document.querySelector('.navbar');

toggelBtn.onclick = function(){
    this.classList.toggle('active');
    navbar.classList.toggle('open');
};
   // ---------------scroll section-----------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
     });
   };
 });
 // -------------------stitcky navbar-------------
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);
};
//----------------------Typed-multiple-text-------
var typed = new Typed(".multiple-text",{
    strings:["","Frontend Developer","UX UI Designer","Software Engneeer"],
    typeSpeed:100,
    backSpeed:50,
    loop:true
})