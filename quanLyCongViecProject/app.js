document.addEventListener('DOMContentLoaded', function () {

    const nameTaskInput = document.querySelector('.name_task');
    const formTask = document.querySelector('#form_task');
    const taskList = document.querySelector('.task_list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Hiển thị danh sách khi load
    renderTasks();

    formTask.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameTask = nameTaskInput.value.trim();

        if (nameTask === '') {
            alert('Vui lòng nhập công việc');
            return;
        }

        tasks.push(nameTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        renderTasks();
        nameTaskInput.value = '';
    });

    function renderTasks() {
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const li = document.createElement('li');

            li.innerHTML = `
                <span>${task}</span>
                <button class="delete-btn" data-index="${index}">Xóa</button>
            `;

            taskList.appendChild(li);
        });

        // Gắn sự kiện xóa
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                tasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
            });
        });
    }

});