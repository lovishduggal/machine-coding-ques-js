const button = document.querySelector('.btn');
const body = document.getElementsByTagName('body');
const modal = document.querySelector('.modal');
const crossIcon = document.querySelector('.cross');
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    modal.style.display = 'none';
});
button.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.style.display = 'block';
    body[0].style.backgroundColor = 'rgb(245, 245, 245)';
});

crossIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    modal.style.display = 'none';
    body[0].style.backgroundColor = '#fff';
});
