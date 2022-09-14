const divs = document.querySelectorAll(".car-elem-wrapper");
const btn = document.querySelector(".f-btn");

for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
}

let counter = 0;
divs[counter].style.display = "flex";

btn.addEventListener('click', () => {
    if (counter < divs.length - 1) {
        counter++;
    } else {
        counter = 0;
    }

    for (let i = 0; i < divs.length; i++) {
        if (counter === i) {
            divs[i].style.display = "flex";
        } else {
            divs[i].style.display = "none";
        }
    }
})


