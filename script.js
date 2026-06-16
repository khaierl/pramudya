// =========================
// READY BUTTON
// =========================

const readyBtn = document.getElementById("readyBtn");

if (readyBtn) {

    readyBtn.addEventListener("click", () => {

        const target =
        document.querySelector(".scrap-intro");

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}

// =========================
// TYPEWRITER
// =========================

const heroTitle =
document.querySelector(".hero h1");

if(heroTitle){

    const text =
    heroTitle.textContent;

    heroTitle.textContent = "";

    let i = 0;

    function typeWriter(){

        if(i < text.length){

            heroTitle.textContent +=
            text.charAt(i);

            i++;

            setTimeout(
                typeWriter,
                120
            );

        }

    }

    setTimeout(
        typeWriter,
        500
    );

}

// =========================
// REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(
"section, .polaroid, .note, .video-polaroid"
);

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
}

);

revealElements.forEach((element)=>{

    element.classList.add("hidden");

    observer.observe(element);

});

// =========================
// PHOTO MODAL
// =========================

const images =
document.querySelectorAll(
".polaroid img, .photo-frame img"
);

const modal =
document.createElement("div");

modal.classList.add("image-modal");

modal.innerHTML = `
<span class="close-modal">&times;</span>
<img class="modal-image">
`;

document.body.appendChild(modal);

const modalImage =
modal.querySelector(".modal-image");

const closeModal =
modal.querySelector(".close-modal");

images.forEach((img)=>{

    img.addEventListener("click",()=>{

        modal.style.display =
        "flex";

        modalImage.src =
        img.src;

    });

});

closeModal.addEventListener(
"click",
()=>{

    modal.style.display =
    "none";

});

modal.addEventListener(
"click",
(e)=>{

    if(e.target === modal){

        modal.style.display =
        "none";

    }

});

// =========================
// MOON ANIMATION
// =========================

const moon =
document.querySelector(".moon-bg");

if(moon){

    let scale = 1;
    let grow = true;

    setInterval(()=>{

        if(grow){

            scale += 0.003;

            if(scale >= 1.05){

                grow = false;

            }

        }else{

            scale -= 0.003;

            if(scale <= 1){

                grow = true;

            }

        }

        moon.style.transform =
        `scale(${scale})`;

    },60);

}

// =========================
// PARALLAX HERO
// =========================

const heroContent =
document.querySelector(".hero-content");

window.addEventListener(
"scroll",
()=>{

    if(!heroContent) return;

    const scrollY =
    window.scrollY;

    heroContent.style.transform =
    `translateY(${scrollY * 0.12}px)`;

});

// =========================
// HERO FADE
// =========================

window.addEventListener(
"scroll",
()=>{

    if(!heroContent) return;

    const opacity =
    Math.max(
        1 - window.scrollY / 600,
        0
    );

    heroContent.style.opacity =
    opacity;

});

// =========================
// STARS TWINKLE
// =========================

const stars =
document.getElementById("stars");

if(stars){

    setInterval(()=>{

        stars.style.opacity =
        Math.random() * 0.3 + 0.6;

    },1000);

}

// =========================
// FLOATING NOTES
// =========================

const notes =
document.querySelectorAll(".note");

notes.forEach((note,index)=>{

    setInterval(()=>{

        const y =
        Math.sin(
            Date.now()/900 + index
        ) * 4;

        note.style.transform =
        `translateY(${y}px) rotate(${index % 2 === 0 ? -2 : 2}deg)`;

    },40);

});

// =========================
// DYNAMIC STYLE
// =========================

const style =
document.createElement("style");

style.innerHTML = `

.hidden{

opacity:0;

transform:
translateY(80px);

transition:
all 1s ease;

}

.show{

opacity:1;

transform:
translateY(0);

}

.image-modal{

position:fixed;

inset:0;

display:none;

justify-content:center;

align-items:center;

background:
rgba(0,0,0,.92);

z-index:99999;

}

.modal-image{

max-width:90%;

max-height:90%;

border-radius:15px;

}

.close-modal{

position:absolute;

top:20px;

right:40px;

font-size:3rem;

cursor:pointer;

color:white;

}

`;

document.head.appendChild(style);