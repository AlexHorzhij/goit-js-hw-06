const input = document.querySelector("#validation-input")

input.addEventListener("blur", checkInput)

function checkInput() {
    const validLength = Number(input.dataset.length)
    console.log(input.value.length)
    if (input.value.length === validLength) {
        input.classList.add("valid")
        input.classList.remove("invalid")
    } else {
        input.classList.add("invalid")
        input.classList.remove("valid")
    }
}
