//selectors
const button = document.querySelector('.todo-button');
const inputBar = document.querySelector('.inputbar');
const todoList = document.querySelector('.todo-list');


//events
button.addEventListener('click', addTask)



//functions
function addTask(e) {
    //prevent the input bar from submitting and refreshing the page
    e.preventDefault();

    let inputTask = inputBar.value
    const newTask = document.createElement('div');
    newTask.classList.add('new-task');
    const task = document.createElement('li');
    task.innerText = inputTask;
    const tick = document.createElement('button');
    const bin = document.createElement('button');
    task.classList.add('task');
    tick.classList.add('tick');
    bin.classList.add('bin');
    tick.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    bin.innerHTML ='<i class="fa-solid fa-trash-can"></i>';
    todoList.appendChild(newTask);
    newTask.appendChild(task);
    newTask.appendChild(tick);
    newTask.appendChild(bin);
    inputBar.value = ""
    
    
    




}