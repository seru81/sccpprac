const Input = document.getElementById("textinput")
const Remove = document.getElementById("remove")
const Print = document.getElementById("print")

Input.addEventListener("input",() => {
    Print.textContent = Input.value.toUpperCase()
})
Next.addEventListener("click",() => {
    Input.value = ""
    Print.textContent = ""
})