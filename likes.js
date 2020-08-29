let heartCount = document.querySelector('.heart-count');
let heart = document.querySelector('.heart');

heart.onclick = () => {
    if (heart.classList.contains('heart-on')) {
        heartCount.textContent--;
    } else {
        heartCount.textContent++;
    }

    heart.classList.toggle('heart-on');
};