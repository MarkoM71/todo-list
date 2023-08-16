
export function createProjects() {
    
    const projectForm = document.getElementById("project-form");
    const projectInput = document.getElementById("project-input");
    const projectListEl = document.getElementById("project-list");
    const projectHeader = document.getElementById("header");
    // const taskButton = document.getElementById("add-task");
    
    let projects = [];
    let headerId;
    let taskProperty;

    //PROJECT FORM SUBMIT
    projectForm.addEventListener('submit', function (event) {
        event.preventDefault();
        saveProject();
        renderProject();
        projectInput.value = "";
    })

    //SAVE PROJECT
    function saveProject() {
        const projectValue = projectInput.value;

        projects.push({
            value: projectValue,
            tasks: []
        });
    }

    //RENDER PROJECT
    function renderProject() {
        // CLEAR ELEMENT BEFORE A RE-RENDER
        projectListEl.innerHTML = "";

        // SHOW PROJECT
        projects.forEach((project, index) => {
            projectListEl.innerHTML += `
        <div class="project" id=${index}>${project.value}</div>`
        })
    }

    //ADD CLICK EVENT LISTNER ON ALL PROJECT
    projectListEl.addEventListener('click', (event) => {
        const header = event.target;
        headerId = Number(header.id)

        let title = projects[headerId].value;
        displayProjectHeader(title);

        taskProperty = projects[headerId].tasks
        //ADD DISPLAY TASKS HERE
        renderTasks()
    });
    
    
    //DISPLAY PROJECT HEADER
    function displayProjectHeader(title) {
        projectHeader.innerText = title;
    }

    //ADD EVENT LISTNER TO ADD TASK BUTTON TO DISPLAY FORM
    const newTaskButton = document.getElementById('add-task');
    const popUpForm = document.querySelector('.pop-up');
    newTaskButton.addEventListener("click", function () {
        popUpForm.style.display = "block";
    })

    //CLOSE FORM BUTTON
    let popUpButton = document.querySelector(".close");
    popUpButton.addEventListener("click", function () {
        popUpForm.style.display = "none";
    })


    //CONSTRUCTOR TO CREATE TASK
    function Task(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    //ADD TASK TO PROJECT
    function addTaskElements() {
        let title = document.getElementById("title").value;
        let dueDate = document.getElementById("due-date").value;
        let priority = document.querySelector(".select-priority").value;

        let newTask = new Task(title, dueDate, priority)
        taskProperty.push(newTask);

    }

    //ADD FUNCTIONALITY TO SUBMIT TASK BUTTON
    document.querySelector(".new-task-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addTaskElements();
    let taskForm = document.querySelector(".new-task-form");
    taskForm.reset();
        popUpForm.style.display = "none";
        console.log(taskProperty);
        console.log(projects);
        // console.log(projects);
    //ADD DISPLAY TASKS HERE
        renderTasks();
    })
    
    // RENDER TASK LIST
    const taskListEl = document.querySelector(".tasks-list")
    function renderTasks() {
        taskListEl.innerHTML = "";
        taskProperty.forEach((task, index) => {
            taskListEl.innerHTML += `
            <div class="task" id=${index}>
                <i class ="bi bi-circle"></i>
                <div class="title">${task.title}</div>
                <div class="due-date">${task.dueDate}</div>
                <div class="priority">${task.priority}</div>
                <i class="bi bi-pencil-square"></i>
                <i class="bi bi-trash"></i>
            <div>`
        })

    }

    
    

}





    // projectHeader.innerHTML = `<h2>${title}</h2>`;
    // projectHeader.innerHTML = "";
    // const header = document.createElement('h2');
    // header.textContent = title;
    //     projectHeader.appendChild(header);
        
    // }

    // addTaskElements(taskProperty);

        
        // addTaskElements(taskProperty);

        // projects[headerId].tasks.push({
        //     taskTitle: title,
        //     dueDate: dueDate,
        //     priority: priority,
        // })

        // console.log(projects);
        // addTaskProperty(headerId);


        //ADD TASK ELEMENTS
    // addTaskElements(index) {

    //     projects[index].tasks.push({
    //         taskTitle: title,
    //         due: dueDate,
    //         taskPriority: priority,
    //     })
    // }
    // taskProperty = {
    //     taskTitle: title,
    //     due: dueDate,
    //     taskPriority: priority,
    // }