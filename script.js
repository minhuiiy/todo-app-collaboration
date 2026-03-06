document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    // Thêm công việc
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Vui lòng nhập công việc!');
            return;
        }

        // Tạo 1 thẻ li duy nhất cho công việc
        const li = document.createElement('li');

        // Tạo span chứa nội dung công việc
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.className = 'task-text';

        // Chức năng Đánh dấu hoàn thành 
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Hoàn thành';
        doneBtn.className = 'done-btn';
        doneBtn.addEventListener('click', () => {
            li.classList.toggle('completed'); 
        });
        

        // Tạo nút sửa
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Sửa';
        editBtn.className = 'edit-btn';
        
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
                
                // Khôi phục lại trạng thái ban đầu có đủ 3 nút
                li.innerHTML = '';
                li.appendChild(taskSpan);
                li.appendChild(doneBtn);
                li.appendChild(editBtn);
                li.appendChild(deleteBtn);
            });
        });

        // Tạo nút xóa
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Xóa';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        
        li.appendChild(taskSpan);
        li.appendChild(doneBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

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