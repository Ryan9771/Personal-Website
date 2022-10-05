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


// Modal Open
const discProj = document.querySelector('[proj-num="0"]');
// discord modal is modal (line 26)
discProj.addEventListener("click", () => {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
    modal.style.display = "block";
    navbar.style.display = "none";
})


// Modal Discord Next Button
const modalNextBtn = document.querySelector(".modal-next-btn-icon");
const modalPrevBtn = document.querySelector(".modal-prev-btn-icon");
let counter = 0;

modalNextBtn.addEventListener("click", () => {
    const project = modalNextBtn.getAttribute("project");
    const projectImages = [...document.querySelectorAll(".".concat(project))];
    counter++;

    for (let i = 0; i < projectImages.length; i++) {
        if (i === counter) {
            if (projectImages[i].classList.contains("hidden")) {
                projectImages[i].classList.remove("hidden");
            }
        } else if (!projectImages[i].classList.contains("hidden")) {
            projectImages[i].classList.add("hidden");
        }
    }

    if (counter === projectImages.length - 1) {
        counter = -1;
    }
})

modalPrevBtn.addEventListener("click", () => {
    const project = modalPrevBtn.getAttribute("project");
    const projectImages = [...document.querySelectorAll(".".concat(project))];

    if (counter === 0) {
        counter = projectImages.length;
    }
    counter--;

    for (let i = 0; i < projectImages.length; i++) {
        if (i === counter) {
            if (projectImages[i].classList.contains("hidden")) {
                projectImages[i].classList.remove("hidden");
            }
        } else if (!projectImages[i].classList.contains("hidden")) {
            projectImages[i].classList.add("hidden");
        }
    }

})

