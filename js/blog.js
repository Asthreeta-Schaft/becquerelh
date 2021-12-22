burgerA =document.querySelector('.burgerA')
navbarA =document.querySelector('.navbarA')
navListA =document.querySelector('.nav-listA')

burgerA.addEventListener('click', ()=>{
navListA.classList.toggle('a-class-resp');
navbarA.classList.toggle('s-class-resp');
})