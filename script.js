let page = document.querySelector('.page');
let button = document.querySelector('.theme-button');

button.onclick = () => {

    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
};