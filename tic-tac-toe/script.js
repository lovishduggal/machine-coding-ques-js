const input = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');
btn.addEventListener('click', (e) => {
    if (input.value) {
        const div = document.createElement('div');
        const childEle = ` <div class="task">
                        <li>${input.value}</li> <button class="del-btn">Delete</button>
                     </div>
                     `;
        div.innerHTML = childEle;
        ul.appendChild(div);
    }
});

ul.addEventListener('click', (e) => {
    const liElements = ul.querySelectorAll('.task');
    if (e.target.classList[0] == 'del-btn') {
        e.target.classList.add('deleted');
        const tasksArr = Array.from(liElements);
        const filteredTasks = tasksArr.filter(
            (currentHtmlEle) =>
                !(currentHtmlEle.children[1].classList[1] == 'deleted')
        );
        ul.innerHTML = '';
        filteredTasks.forEach((currentHtmlEle) =>
            ul.appendChild(currentHtmlEle)
        );
    }
});
