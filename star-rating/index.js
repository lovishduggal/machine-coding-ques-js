const starsCont = document.querySelector('.stars-container');
const starList = document.querySelectorAll('.star');
let filled = 0;
let flag = true;

starsCont.addEventListener('click', (e) => {
    const currentIndex = e.target.dataset.index;
    console.log(currentIndex, filled);
    for (let i = 0; i < filled; i++) {
        starList[i].style.color = 'black';
    }
    for (let i = 0; i < currentIndex; i++) {
        starList[i].style.color = 'yellow';
    }
    filled = currentIndex;
});

starsCont.addEventListener('mouseover', (e) => {
    const currentIndex = e.target.dataset.index;
    console.log(currentIndex);
    for (let i = 0; i < starList.length; i++) {
        starList[i].style.color = 'black';
    }
    for (let i = 0; i < currentIndex; i++) {
        starList[i].style.color = 'yellow';
    }
});

starsCont.addEventListener('mouseleave', (e) => {
    const currentIndex = e.target.dataset.index;

    for (let i = 0; i < starList.length; i++) {
        starList[i].style.color = 'black';
    }

    for (let i = 0; i < filled; i++) {
        starList[i].style.color = 'yellow';
    }
});
