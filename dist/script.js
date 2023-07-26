const hamburger = document.querySelector("#hamburger")
const navigation = document.querySelector("#navigation")

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("hidden")
    navigation.classList.toggle("flex")
    hamburger.classList.toggle("active")
})