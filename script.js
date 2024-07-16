let meunIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".links")

meunIcon.onclick =()=>{
    meunIcon.classList.toggle('fa-solid')
    navbar.classList.toggle('active')
}