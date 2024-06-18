const boxes = document.querySelectorAll('.box');
const inputs = [];
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'red';
        inputs.push(e.target.dataset.index);

        if (inputs.length === boxes.length) deselectFromStart();
    });
}

function deselectFromStart() {
    return setTimeout(() => {
        for (let j = 0; j < inputs.length; j++) {
            setTimeout(() => {
                boxes[inputs[j]].addEventListener('click', (e) => {
                    e.target.style.backgroundColor = '#fff';
                });
                boxes[inputs[j]].click();
            }, 1000 * j);
        }
    }, 2000);
}
