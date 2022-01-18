const title = document.querySelector(".infor .metadata .title");
const button = document.querySelector(".infor .metadata .plusBtn");

button.addEventListener("click" ,() => {
    button.classList.toggle('clicked');
    title.classList.toggle('clamp');
});