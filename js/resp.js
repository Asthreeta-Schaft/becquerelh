burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
navList =document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
navList.classList.toggle('v-class-resp');
navbar.classList.toggle('h-class-resp');
})

    var form = document.getElementById("my-form");
    var status = document.getElementById("status");



    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        }).catch(error => {
          status.innerHTML = "Oops! There was a problem submitting your form"
        });
      }
      form.addEventListener("submit", handleSubmit)
  
function popup(){
  swal({
    title: "Form Submitted Successfully",
    text: "We will get back to you soon..",
    icon: "success",
    button: "Ok",
  });
}

let btnClear = document.querySelector('button');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', () => {
  inputs.forEach(input => input.value = '');
});


const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");

const optionList = document.querySelectorAll(".option");

selected.addEventListener("click", ()=>{
  optionsContainer.classList.toggle("active");

  searchBox.value = "";
  filterList("");

  if(optionsContainer.classList.contains("active")){
    searchBox.focus();
  }
});

optionList.forEach( o =>{
  o.addEventListener("click", ()=>{
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

searchBox.addEventListener("keyup", function(e){
  filterList(e.target.value);
});

const filterList = searchTerm =>{
  searchTerm = searchTerm.toLowerCase();
  optionList.forEach( option => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if(label.indexOf(searchTerm) != -1){
      option.style.display = "block";
    } else{
      option.style.display = "none";
    }
  });
};