const starList = document.querySelectorAll('.star');
let flag = true;

for (let index = 0; index < starList.length; index++) {
    starList[index].addEventListener('click', (e) => {
        flag = !flag;
        const idx = e.target.dataset.index;

        for (let index = 0; index < starList.length; index++) {
            starList[index].style.color = 'black';
        }

        for (let index = 0; index < idx; index++) {
            starList[index].style.color = 'yellow';
        }
    });

    starList[index].addEventListener('mouseover', (e) => {
        const idx = e.target.dataset.index;
        for (let index = 0; index < starList.length; index++) {
            starList[index].style.color = 'black';
        }

        for (let index = 0; index < idx; index++) {
            starList[index].style.color = 'yellow';
        }
    });

    starList[index].addEventListener('mouseout', (e) => {
        const idx = e.target.dataset.index;
        if (flag && idx < 2) {
            for (let index = 0; index < starList.length; index++) {
                starList[index].style.color = 'black';
            }
        }
    });
}
