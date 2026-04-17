document.addEventListener('DOMContentLoaded', function () {

    const nameTaskInput = document.querySelector('.name_task');
    const formTask = document.querySelector('#form_task');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    formTask.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameTask = nameTaskInput.value.trim();

        if (nameTask === '') {
            alert('Vui lòng nhập công việc');
            return;
        }

        tasks.push(nameTask);

        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('Sâm yêu tâm');
    });
});