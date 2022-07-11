const input = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

input.addEventListener("input", changeTextSize)

function changeTextSize() {
    text.style.fontSize = input.value + "px"
}
