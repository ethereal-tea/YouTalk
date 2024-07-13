const btn = document.querySelector(".header__menu-btn")
const navigation = document.querySelector(".header__nav")

btn.addEventListener("click", () => {
    navigation.classList.toggle("header__nav--visible");
    btn.classList.toggle("header__menu-btn--cross");
})