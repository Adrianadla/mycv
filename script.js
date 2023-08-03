// Menu Hamburguesa


const navToggle = document.querySelector(".hamb");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {

  links.classList.toggle("show-links");
});


// Función cambio de color

const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev){
if(ev.target.checked){
document.documentElement.setAttribute('tema', 'light');
} else {
document.documentElement.setAttribute('tema', 'dark');
}
 }
 colorSwitch.addEventListener('change', cambiaTema);
