burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
navList =document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
navList.classList.toggle('v-class-resp');
navbar.classList.toggle('h-class-resp');
})


function readMore(city) {
    let dots = document.querySelector(`.card[data-city="${city}"] .dots`);
    let moreText = document.querySelector(`.card[data-city="${city}"] .more`); 
    let btnText = document.querySelector(`.card[data-city="${city}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Click on this tab to read full article";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Thanks for reading click again to see less"; 
        moreText.style.display = "inline";
    }
}