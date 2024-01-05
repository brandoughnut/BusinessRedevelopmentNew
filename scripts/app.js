let hamburgerClick = document.getElementById("hamburgerClick");
let hamburgerBtn = document.getElementById("hamburgerBtn");

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
