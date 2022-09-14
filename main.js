const divs = document.querySelectorAll(".car-elem-wrapper");
const btn = document.querySelector(".f-btn");

for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
}

let counter = 0;
divs[counter].style.display = "flex";


