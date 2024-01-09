const toggle = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggle.addEventListener("click",()=>{
    dropDownMenu.classList.toggle("open");
})



