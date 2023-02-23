// document.addEventListener("scroll",fixedNavbar());

// function fixedNavbar() {
//     const navb = document.querySelector("#navbar");  
//     if (window.pageYOffset > 1) {
//         navb.classList.add("thin");
//         console.log("check");
//     } else {
//         navb.classList.add("thin");
//         console.log("checkelse");
//     }
// }

// document.addEventListener("onscroll", fixedNavbar());


window.onscroll = function  sticky(){
    fixedNavbar()
}
function fixedNavbar(){
    const navb = document.querySelector("#navbar")
    if (window.scrollY > 100) {
        navb.classList.add("thin");
        console.log("check");
    } else {
        navb.classList.remove("thin");
        console.log("checkelse");
    }
}