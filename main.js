// About carousell btn
const aboutList = [...document.querySelectorAll(".about-ctn")];

const btn = document.querySelector(".next-btn");
const btnIcon = document.getElementById("next-btn-icon");

const aboutNavBtn = document.getElementById("about-nav");
const contactNavBtn = document.getElementById("contact-nav");

let cnt = 0;
aboutList[0].style.display = "flex";

function toggleAboutContact(count) {
    aboutList[count].style.display = "flex";
    if (count === 0) {
        aboutList[1].style.display = "none";
        btnIcon.style.transform = "rotate(0deg)";
    } else {
        aboutList[0].style.display = "none";
        btnIcon.style.transform = "rotate(-180deg)";
    }
}

aboutNavBtn.addEventListener("click", () => {
    cnt = 0;
    toggleAboutContact(cnt);
})

contactNavBtn.addEventListener("click", () => {
    cnt = 1;
    toggleAboutContact(cnt);
})


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


// Modal Open
const cardList = [...document.querySelectorAll(".card")];

for (let i = 0; i < cardList.length; i++) {
    const card = cardList[i];
    card.addEventListener("click", () => {
        const projNum = card.getAttribute("proj-num");
        console.log(projNum);

        const projModal = document.querySelector(`[proj-modal="${projNum}"]`);
        console.log(projModal);

        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
        projModal.style.display = "block";
        navbar.style.display = "none";
    })
}


// Modal Previous State
let prevProject;

// Modal Next Button
const modalNextBtns = [...document.querySelectorAll(".modal-next-btn-icon")];
let counter = 0;

for (let i = 0; i < modalNextBtns.length; i++) {
    modalNextBtns[i].addEventListener("click", () => {
        const project = modalNextBtns[i].getAttribute("project");
        const projectImages = [...document.querySelectorAll(".".concat(project))];

        if (!prevProject || prevProject !== project) {
            counter = 0;
        } 
        if (counter === projectImages.length - 1) {
            counter = -1;
        }

        prevProject = project;

        console.log("====== Next Before ======");
        console.log(counter);
        counter++;
        console.log("====== Next After ======");
        console.log(counter);
    
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
}

// Modal Previous Button
const modalPrevBtns = [...document.querySelectorAll(".modal-prev-btn-icon")];

for (let i = 0; i < modalPrevBtns.length; i++) {
    modalPrevBtns[i].addEventListener("click", () => {
        const project = modalPrevBtns[i].getAttribute("project");

        if (!prevProject || prevProject !== project) {
            counter = 0;
        }
        prevProject = project;

        const projectImages = [...document.querySelectorAll(".".concat(project))];
    
        if (counter === 0) {
            counter = projectImages.length;
        } else if (counter === -1) {
            counter = projectImages.length - 1;
        }
        console.log("====== Previous Before ======");
        console.log(counter);
        counter--;
        console.log("====== Previous After ======");
        console.log(counter);
    
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
}

const projMap = {
    "0": "discord",
    "1": "calculator"
}

function onModalClose(projectNum) {
    const proj = projMap[projectNum];
    const allImgs = [...document.querySelectorAll(".".concat(proj))];
    for (let i = 0; i < allImgs.length; i++) {
        if (i === 0 && allImgs[i].classList.contains("hidden")) {
            allImgs[i].classList.remove("hidden");
        } else if (i !== 0 && !allImgs[i].classList.contains("hidden")) {
            allImgs[i].classList.add("hidden");
        }
    }
    counter = 0;
}

// Modal Close
const modalBtns = [...document.querySelectorAll(".modal-close")];
const navbar = document.querySelector("nav");

for (let i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener("click", () => {
        const modalNum = modalBtns[i].getAttribute("proj-modal");
        onModalClose(modalNum);
        const modal = document.querySelector(`[proj-modal="${modalNum}"]`);
        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
        modal.style.display = "none";
        navbar.style.display = "flex";   
    })
}






