//selectors
const addButton = document.querySelector('.input-btn');
const input = document.querySelector('.input');
const list = document.querySelector('.list');
const task = document.querySelector('.task');




//event listener
addButton.addEventListener('click', addTask);
list.addEventListener('click', completeDelete);

//function


//adding tasks to the list
function addTask(event) {
    //preventing form from submitting
    event.preventDefault();

    // making sure input isn't empty
    if (!(input.value === "")){
        //creating Div
        const task = document.createElement('div');
        task.classList.add('task');

        //creating li and assigning input value
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerText = input.value;

        //creating buttons
        const tickBtn = document.createElement('button');
        tickBtn.classList.add('tick-btn');
        tickBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

        const binBtn = document.createElement('button');
        binBtn.classList.add('bin-btn');
        binBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

        //joining div.task to ul
        list.appendChild(task);

        //joining li and btns to div.task
        task.appendChild(taskItem);
        task.appendChild(tickBtn);
        task.appendChild(binBtn);

        //clear input bar
        input.value = ""
    };
};


//adding task buttons' functionality
function completeDelete(event) {

    //which button clicked?
    let clickedButton = event.target;
    //tick button!
    if (clickedButton.classList[0] === 'tick-btn') {
        clickedButton.parentElement.classList.toggle('complete');
    };
    //bin button!
    if (clickedButton.classList[0] === 'bin-btn') {
        clickedButton.parentElement.classList.add('they-see-me-falling')
        clickedButton.parentElement.addEventListener('transitionend', function() {
            clickedButton.parentElement.remove();
        })
    }
}








//Structure of added tasks:

    // div.list-container
    //     ul.list
    //         div.task
    //           li.task-item
    //           button.tick-btn
    //           button.bin-btn
