import '../scss/style.scss';

const addTaskButton = document.getElementById('add-task-btn');
const clearButton = document.getElementById('clear-btn');
const tasks = document.getElementsByClassName('task');

addTaskButton.addEventListener('click', () => {
    let taskList = document.getElementById('tasks');
    let newTask = document.createElement('div');
    let infoBlock = document.createElement('div');
    let taskName = document.createElement('h3');
    let taskText = document.createElement('p');

    newTask.className = 'task';
    taskName.innerHTML = prompt('Enter the name:');
    if (taskName.innerHTML.length == 0) {
        return;
    }
    taskText.innerHTML = prompt('Enter the description:');
    
    if (taskText.innerHTML.length == 0) {
        taskText.innerHTML = 'Empty description.';
    }
    if (taskName.innerHTML.length > 0) {
        infoBlock.append(taskName);
        infoBlock.append(taskText);
        newTask.append(infoBlock);
        taskList.append(newTask);
        refresh();
        setTimeout(() => { // Анимация
            newTask.classList.add('visible');
        }, 10);
    } else {
        alert('Enter the task name, please.')
    }
});

clearButton.addEventListener('click', () => {
    let taskList = document.getElementById('tasks');
    taskList.innerHTML = '';
    refresh();
})

function refresh() {
    let tasksList = document.getElementById('tasks');
    if (tasksList.childElementCount == 0) {
        let noTasks = document.createElement('p');
        noTasks.id = 'no-tasks-text';
        noTasks.innerHTML = "There are no more tasks for today!";
        tasksList.append(noTasks);
    } else {
        let noTasks = document.getElementById('no-tasks-text');
        if (noTasks) {
            noTasks.remove();
        }
    }
    
    Array.from(tasks).forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (!document.getElementById('delete-btn')) {
                let deleteButton = document.createElement('h4');
                deleteButton.id = 'delete-btn';
                deleteButton.innerHTML = 'Delete';
                element.append(deleteButton);
                deleteButton.addEventListener('click', () => {
                    element.remove();
                    refresh();
                });
            }
        });
        element.addEventListener('mouseleave', () => {
            let deleteButton = document.getElementById('delete-btn');
            deleteButton.remove();
        });
    });
}

