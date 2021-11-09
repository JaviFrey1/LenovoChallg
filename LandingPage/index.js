const toggle = document.querySelector(".toggle");
const divList = document.querySelector(".divList");

toggle.addEventListener("click", () => {
    divList.classList.toggle("divListVisible");
})