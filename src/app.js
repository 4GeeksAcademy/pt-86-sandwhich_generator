import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".btn").addEventListener("click", 
    generateSandwhich)
};

const generateSandwhich = () => {
  let breads = ["white", "wheat", "rye", "potato", "Hawaiian", "Italian"];
  let meats = ["turkey", "tuna", "chicken", "pepperoni", "ham", "meatball"];
  let cheeses = ["American", "Swiss", "Pepper Jack", "Provolone", "Cheddar"];
  let sauces = ["Mayo", "Mustard", "Ranch", "Oil & Vinegar", "Ketchup"];
  let vegs = ["lettuce", "spinach", "Onions", "bell peppers", "tomato"];

  let breadIndex = Math.floor(Math.random() * breads.length);
  let meatIndex = Math.floor(Math.random() * meats.length);
  let cheeseIndex = Math.floor(Math.random() * cheeses.length);
  let sauceIndex = Math.floor(Math.random() * sauces.length);
  let vegIndex = Math.floor(Math.random() * vegs.length);

  let breadDiv = document.querySelector("#bread");
  let meatDiv = document.querySelector("#meat");
  let cheeseDiv = document.querySelector("#cheese");
  let sauceDiv = document.querySelector("#sauce");
  let vegDiv = document.querySelector("#veg");

  breadDiv.innerHTML = breads[breadIndex];
  meatDiv.innerHTML = meats[meatIndex];
  cheeseDiv.innerHTML = cheeses[cheeseIndex];
  sauceDiv.innerHTML = sauces[sauceIndex];
  vegDiv.innerHTML = vegs[vegIndex];
}
