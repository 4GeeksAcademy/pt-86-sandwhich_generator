import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".btn").addEventListener("click", generateSandwhich)
  generateAllSandwhiches()
};

let breads = ["white", "wheat", "rye", "potato", "Hawaiian", "Italian"];
let meats = ["turkey", "tuna", "chicken", "pepperoni", "ham", "meatball"];
let cheeses = ["American", "Swiss", "Pepper Jack", "Provolone", "Cheddar"];
let sauces = ["Mayo", "Mustard", "Ranch", "Oil & Vinegar", "Ketchup"];
let vegs = ["lettuce", "spinach", "Onions", "bell peppers", "tomato"];
let ingredients = [breads, meats, cheeses, sauces, vegs];

const generateSandwhich = () => {
  let sandwhichDiv = document.querySelector("#sandwhich");
  let sandwhich = "";

  for(let type of ingredients) {
    sandwhich += type[Math.floor(Math.random() * type.length)] + " "
  }

  sandwhichDiv.innerHTML = sandwhich
}

const generateAllSandwhiches = () => {
  for(let bread of breads) 
    for(let meat of meats) 
      for(let cheese of cheeses) 
        for(let sauce of sauces) 
          for(let veg of vegs) 
            console.log(bread + " " + meat + " " + cheese + " " + sauce + " " + veg)
}
//14 from 15 line of code started 24 lines of code
