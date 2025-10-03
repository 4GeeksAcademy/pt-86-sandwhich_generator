import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let btn = document.querySelector(".btn")
let favBtn = document.querySelector("#fav")

window.onload = function() {
  btn.addEventListener("click", generateSandwhich)
  favBtn.addEventListener("click", addToFavorites)
  generateAllSandwhiches()
};

let breads = ["white", "wheat", "rye", "potato", "Hawaiian", "Italian"];
let meats = ["turkey", "tuna", "chicken", "pepperoni", "ham", "meatball"];
let cheeses = ["American", "Swiss", "Pepper Jack", "Provolone", "Cheddar"];
let sauces = ["Mayo", "Mustard", "Ranch", "Oil & Vinegar", "Ketchup"];
let vegs = ["lettuce", "spinach", "Onions", "bell peppers", "tomato"];
let ingredients = [breads, meats, cheeses, sauces, vegs]; //array of all ingredient arrays

const generateSandwhich = () => {
  let sandwhichDiv = document.querySelector("#sandwhich");
  let sandwhich = "";

  for(let type of ingredients) { 
    let index = Math.floor(Math.random() * type.length)
    sandwhich += type[index] + " "

    console.log(type[index])
    if(type[index] == 'pepperoni') {
      console.log("if")
      btn.style.color = "red";
    }
    else if(type[index] == 'turkey') {
      console.log("else if")
      btn.style.color = "blue";
    }
  }

  sandwhichDiv.innerHTML = sandwhich
  
}

const addToFavorites = () => {
  let liked = favBtn.firstChild.classList?.contains("fa-solid") 
  if(liked == true) {
    favBtn.innerHTML = '<i class="fa fa-light fa-heart"></i>'
    favBtn.style.color = "black";
  }
  else {
    favBtn.innerHTML = '<i class="fa fa-solid fa-heart"></i>'
    favBtn.style.color = "red";
  }
}

const generateAllSandwhiches = () => {
//   for(let bread of breads) 
//     for(let meat of meats) 
//       for(let cheese of cheeses) 
//         for(let sauce of sauces) 
          // for(let veg of vegs) 
            // console.log(bread + " " + meat + " " + cheese + " " + sauce + " " + veg)
}
//14 from 15 line of code started 24 lines of code
