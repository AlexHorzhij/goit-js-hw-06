function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input")
const createBtn = document.querySelector("button[data-create]")
const destroyBtn = document.querySelector("button[data-destroy]")
const box = document.querySelector("#boxes")

createBtn.addEventListener("click", createEl)
destroyBtn.addEventListener("click", destroyEl)


function createEl() {
  let numberOfEl = []

  for (let i = 0; i < input.value; i += 1){
    let sizeDiv = 30
    let boxes = document.createElement("div")

    boxes.classList.add("new-div")
    boxes.style.backgroundColor = getRandomHexColor()
    boxes.style.width = sizeDiv + 10 * i + "px"
    boxes.style.height = sizeDiv + 10 * i + "px"

    numberOfEl.push(boxes)
  }
  box.append(...numberOfEl)
}

function destroyEl() {
  box.innerHTML = ""
  input.value = ""
 }
