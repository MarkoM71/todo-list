// import { createTasks } from "./tasks.js"; 
// createTasks();

export function createProjects() {
    
    const projectForm = document.getElementById("project-form");
    const projectInput = document.getElementById("project-input");
    const projectListEl = document.getElementById("project-list");
    const projectHeader = document.getElementById("header");

    let projects = [];

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

        const headerId = Number(header.id)

        let title = projects[headerId].value;

        displayProjectHeader(title);

    })
    
    //DISPLAY PROJECT HEADER
    function displayProjectHeader(title) {
        projectHeader.innerText = title;
    }
}




    // projectHeader.innerHTML = `<h2>${title}</h2>`;
    // projectHeader.innerHTML = "";
    // const header = document.createElement('h2');
    // header.textContent = title;
    //     projectHeader.appendChild(header);
        
    // }