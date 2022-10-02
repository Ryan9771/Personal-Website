// About carousell btn
const aboutList = [...document.querySelectorAll(".about-ctn")];

const btn = document.querySelector(".next-btn");
const btnIcon = document.getElementById("next-btn-icon");

aboutList[0].style.display = "flex";

let cnt = 0;
btn.addEventListener("click", function() {
    aboutList[cnt].style.display = "none";
    let rotate;
    if (cnt == 0) {
        cnt++;
        rotate = "-180deg";
    } else {
        cnt = 0;
        rotate = "0deg";
    }
    aboutList[cnt].style.display = "flex";
    btnIcon.style.transform = `rotate(${rotate})`;
})

// Modal Close Btn
const modalBtn = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");
const navbar = document.querySelector("nav");
modalBtn.addEventListener("click", () => {
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
    modal.style.display = "none";
    navbar.style.display = "flex";
})
