const icon = document.querySelector('.searchbox__icon');
const searchbox = document.querySelector('.searchbox');

const clear = document.querySelector('.searchbox__input-clear');
const searchboxText = document.getElementById('searchbox__input-text');

const nav = document.querySelector('nav');
const navPos = nav.getBoundingClientRect().top;




window.addEventListener("scroll", e => {
    let viewportHeigth = window.innerHeight;
    let scrollPos = window.scrollY;

    if (scrollPos > navPos){
        nav.classList.add("stick");
    } else {
        nav.classList.remove("stick");
    }
});

icon.onclick = () => {
    if (searchboxText.value === ""){
        searchbox.classList.toggle('active');
        console.log("click");
    } else {
        console.log("invia ricerca");
    }
}

clear.onclick = () => {
    if (searchboxText.value !== ''){
       searchboxText.value = '';
    } else {
        searchbox.classList.toggle('active');
    }
}