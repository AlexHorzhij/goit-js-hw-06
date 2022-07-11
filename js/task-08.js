const form = document.querySelector(".login-form")

form.addEventListener("submit", submitForm)

function submitForm(event) {
    event.preventDefault()

    const {
        elements: { email, password }
    } = event.currentTarget

    if (email.value === "" || password.value === "") {
        alert("Ви заповнели не всі поляю. Преревірте ще раз.")
    }
    console.log(event)
    console.log(`Login: ${email.value}, Password: ${password.value}`)

    event.currentTarget.reset()
}
