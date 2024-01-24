const recipeName = document.querySelector("#recipe-name").innerText;
const recipeTagName = document.querySelector("#recipe-name").tagName;
const description = document.querySelector(".description");
const fontSize = window.getComputedStyle(description);
const imageAltValue = document.querySelector("img").getAttribute("alt");
const image = document.querySelector("img");
const imgComputedStyle = window.getComputedStyle(image);
const paste = document.querySelector(".ingredients-list-paste").children.length;
const forthIngredient = document.querySelector(".ingredients-list-paste")
  .children[3].innerText;
const instructions = document.querySelectorAll(".instructions-list");

const dimensionOfImg = {
  url: image.getAttribute("src"),
  width: imgComputedStyle.width,
  height: imgComputedStyle.height,
};

const instructionsArray = [];

instructions.forEach((list, i) => {
  const listItems = list.querySelectorAll("li");
  listItems.forEach((item, indx) => {
    instructionsArray.push({ order: `${indx + 1}`, text: `${item.innerText}` });
  });
});

console.log(instructionsArray);
console.log(paste);
console.log(forthIngredient);
console.log(dimensionOfImg);
console.log(imageAltValue);
console.log(fontSize.fontSize);
console.log(recipeName);
console.log(recipeTagName);
