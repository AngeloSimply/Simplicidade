const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".header-list");

hamburguer.addEventListener("click", ()=>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');

})