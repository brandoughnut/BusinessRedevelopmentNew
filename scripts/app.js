let hamburgerClick = document.getElementById("hamburgerClick");
let hamburgerBtn = document.getElementById("hamburgerBtn");

const html = document.querySelector("html");

let isNav = false;

hamburgerBtn.addEventListener("click", function(e) {
    if(isNav){
        hamburgerClick.classList.remove("hamburger");
        isNav = false;
    }else{
        hamburgerClick.classList.add("hamburger");
        isNav = true;
    }

});
