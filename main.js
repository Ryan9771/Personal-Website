/* About-carousell handler */

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


/* Project Buttons Handler */

const labels = [...document.querySelectorAll(".project-label")];
console.log(labels);
const projects = [...document.querySelectorAll(".project")];

const def = document.getElementById("default");
def.style.display = "flex";

for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener("click", function() {
        const carNum = labels[i].getAttribute("car-num");
        
        for (let j = 0; j < projects.length; j++) {
            const projCarNum = projects[j].getAttribute("car-num");
            if (carNum === projCarNum) {
                projects[j].style.display = "flex";
            } else {
                projects[j].style.display = "none";
            }
        }
    })
}

/* Cow Eye Movement */
const anchor = document.getElementById("anchor");
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.width / 2 + rekt.left;
const anchorY = rekt.height / 2 + rekt.top;
const eye = document.getElementById("eye");

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;

    return deg;
}


/* Triggers the moo or the ow speech bubble on hover or press */
const moo = document.getElementById("moo");
anchor.onmouseover = () => {
    moo.style.display = "flex";
    setTimeout(() => { moo.style.display = "none" }, 1000);
}

const ow = document.getElementById("ow");
anchor.addEventListener("click", () => {
    moo.style.display = "none";
    ow.style.display = "flex";
    setTimeout(() => { ow.style.display = "none" }, 1000);

})