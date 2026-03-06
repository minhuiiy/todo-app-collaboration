document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Thêm công việc
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
            return;
        }

        const li = document.createElement('li');

        // Nội dung công việc
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Nút sửa
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Sửa';

        // Chức năng sửa
        editBtn.addEventListener('click', () => {

            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = taskSpan.textContent;

            const saveBtn = document.createElement('button');
            saveBtn.textContent = 'Lưu';

            li.innerHTML = '';
            li.appendChild(editInput);
            li.appendChild(saveBtn);

            saveBtn.addEventListener('click', () => {

                const newValue = editInput.value.trim();

                if (newValue === '') {
                    alert('Không được để trống!');
                    return;
                }

                taskSpan.textContent = newValue;

                li.innerHTML = '';
                li.appendChild(taskSpan);
                li.appendChild(editBtn);
            });

        });

        li.appendChild(taskSpan);
        li.appendChild(editBtn);

        taskList.appendChild(li);

        taskInput.value = '';
        taskInput.focus();
    }

    addBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

});