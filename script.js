document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Chức năng thêm công việc
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            
            // Tạo span chứa nội dung công việc
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.className = 'task-text';
            
            // Tạo nút xóa
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Xóa';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                li.remove();
            });
            
            li.appendChild(taskSpan);
            li.appendChild(deleteBtn);
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
