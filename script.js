document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Chức năng thêm công việc
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = ''; // Xóa input sau khi thêm
            taskInput.focus(); // Đưa con trỏ lại input
        } else {
            alert('Vui lòng nhập công việc!');
        }
    }

    // Sự kiện click nút Thêm
    addBtn.addEventListener('click', addTask);

    // Sự kiện nhấn phím Enter trong ô nhập
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
