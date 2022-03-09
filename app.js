//selectors
const addButton = document.querySelector('.input-btn');
const input = document.querySelector('.input');
const list = document.querySelector('.list');
const task = document.querySelector('.task');
const filterBar = document.querySelector('.filter');




//event listener
document.addEventListener('DOMContentLoaded', retrieveTasks);
addButton.addEventListener('click', addTask);
list.addEventListener('click', completeDelete);
filterBar.addEventListener('click', filterTasks);

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

        //save the task in local storage
        saveTasks(input.value);
        // saveTasks(input.value)

        //clear input bar
        input.value = ""
    };
};


//adding task buttons' functionality
function completeDelete(event) {

    //which button clicked?
    let clickedButton = event.target;
    //its parent element
    let buttonDad = clickedButton.parentElement
    //tick button!
    if (clickedButton.classList[0] === 'tick-btn') {
        buttonDad.classList.toggle('complete');
    };
    //bin button!
    if (clickedButton.classList[0] === 'bin-btn') {
        deleteFromStorage(buttonDad)
        buttonDad.classList.add('they-see-me-falling')
        buttonDad.addEventListener('transitionend', function() {
            buttonDad.remove();
        })
    }
}

//filtering

function filterTasks(event) {
    //accessing each task
    const taskDivs = list.childNodes;

    //if you click on [filter value], change tasks' display
    taskDivs.forEach(function(task) {
        
        switch(event.target.value){
            case "all":
                task.style.display = "flex";
                break;
            case "complete":
                if (task.classList.contains('complete')) {
                    task.style.display = "flex";
                } else {
                    task.style.display = "none";
                }
                break;
            case "incomplete":
                if (!task.classList.contains('complete')){
                    task.style.display = "flex";
                } else {
                    task.style.display = "none";
                }
                break;
        }
    });
}


// checking if local Storage list already exists
function isLocalStorageNull() {
    let storageList;
    //checking if there is anything in LocalStorage already
    if (localStorage.getItem('storageList') === null) {
        //no, the list is empty
        storageList = [];
    } else {
        // yes, use JSON to save localStorage list into storageList variable
        storageList = JSON.parse(localStorage.getItem('storageList'))
    };
    return storageList;
}



// Saving in storage

function saveTasks(task) {
    //list of input tasks
    let storageList = isLocalStorageNull();
    //checking if there is anything in LocalStorage already
    if (localStorage.getItem('storageList') === null) {
        //no, the list is empty
        storageList = [];
    } else {
        // yes, use JSON to save localStorage list into storageList variable
        storageList = JSON.parse(localStorage.getItem('storageList'))
    };
    
    //add new task to the list
    storageList.push(task);
    //translate new list via JSON and save it as localStorage list
    localStorage.setItem('storageList', JSON.stringify(storageList));

}


//retrieving from storage

function retrieveTasks() {
    
    //list of input tasks
    let storageList = isLocalStorageNull()
    //checking if there is anything in LocalStorage already
    
    storageList.forEach(function(element) {
        const task = document.createElement('div');
        task.classList.add('task');

        //creating li and assigning input value
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerText = element;

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
    })
}


function deleteFromStorage(element) {
    let storageList = isLocalStorageNull();
    let taskToFindIndex = element.children[0].innerText;
    storageList.splice(storageList.indexOf(taskToFindIndex), 1);
    localStorage.setItem('storageList', JSON.stringify(storageList));
}








//Structure of added tasks:

    // div.list-container
    //     ul.list
    //         div.task
    //           li.task-item
    //           button.tick-btn
    //           button.bin-btn
