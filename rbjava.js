let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move')

}


  let header = document.querySelector('header');

  window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
  });







  var toggle = document.getElementById("toggle");
var containera = document.getElementById("containera");

toggle.onclick = function(){
	containera.classList.toggle('active');
}