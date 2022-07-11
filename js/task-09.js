function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const background = document.querySelector("body")
const colorName = document.querySelector(".color")
const changeBtn = document.querySelector(".change-color")

changeBtn.addEventListener("click", changeColor)

function changeColor() {
  colorName.textContent = getRandomHexColor()

  background.style.backgroundColor = colorName.textContent
  
}