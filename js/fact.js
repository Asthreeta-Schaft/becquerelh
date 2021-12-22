burger =document.querySelector('.burger')
navbarA =document.querySelector('.navbarA')
navListA =document.querySelector('.nav-listA')

burger.addEventListener('click', ()=>{
navListA.classList.toggle('a-class-resp');
navbarA.classList.toggle('s-class-resp');
})