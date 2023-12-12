const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variable

const dots = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const img = document.querySelector("#banner .banner-img");
const p = document.querySelector("#banner p");

let index = 0;

// Boucles

function displayDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i == index) {
      dot.classList.add("dot_selected");
    }
  }
}
displayDots();

// Fonction clique droit

function clickRight() {
  arrowRight.addEventListener("click", () => {
    const slidesDots = document.querySelectorAll(".dots .dot");
    slidesDots[index].classList.remove("dot_selected");

    console.log("Vers la droite");
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    slidesDots[index].classList.add("dot_selected");
    img.src = `./assets/images/slideshow/${slides[index].image}`;
    p.innerHTML = slides[index].tagLine;
  });
}
clickRight();

//Fonction clique gauche

function clickLeft() {
  arrowLeft.addEventListener("click", () => {
    const slidesDots = document.querySelectorAll(".dots .dot");
    slidesDots[index].classList.remove("dot_selected");
    console.log("Vers la gauche");
    index--;
    if (index < 0) {
      index = slides.length - 1;
    }
    slidesDots[index].classList.add("dot_selected");
    img.src = `./assets/images/slideshow/${slides[index].image}`;
    p.innerHTML = slides[index].tagLine;
  });
}
clickLeft();
