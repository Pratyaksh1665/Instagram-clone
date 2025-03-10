const menuIcon = document.getElementById("menu-icon")
const sideBar = document.getElementById("sidebar")
const home = document.getElementById("home")

menuIcon.addEventListener("click",() => {
    if (sideBar.style.left === "0px" || sideBar.style.left === "") {
        sideBar.style.left = "-300px";
    }else if(sideBar.style.left === "-300px"){
        sideBar.style.left = "0px"
    } else {
        sideBar.style.left = "0px";
    }
})