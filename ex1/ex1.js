const Input = document.getElementById("textinput")
const Change = document.getElementById("change")
const Print = document.getElementById("print")

Change.addEventListener("click",() => {
    Print.textContent = Input.value
    Input.value = ""
})