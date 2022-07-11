const decrementBtn = document.querySelector('button[data-action="decrement"]')
const counter = document.querySelector('#value')
const incrementBtn = document.querySelector('button[data-action="increment"]')

let counterValue = 0

incrementBtn.addEventListener("click", increaseValue)
decrementBtn.addEventListener("click", decreaseValue)


function decreaseValue() {
    counterValue -= 1
    counter.innerHTML = counterValue
}

function increaseValue() {
    counterValue += 1
    counter.innerHTML = counterValue
}


