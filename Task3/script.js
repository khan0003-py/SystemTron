document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      
      const deleteButton = document.createElement('span');
      deleteButton.textContent = '❌';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', function() {
        li.remove();
      });
      
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    }
  });
  