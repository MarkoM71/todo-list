/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n \n// import { createTasks } from \"./tasks.js\"; \n\n\n(0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createProjects)();\n// createTasks();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjects: () => (/* binding */ createProjects)\n/* harmony export */ });\n\nfunction createProjects() {\n    \n    const projectForm = document.getElementById(\"project-form\");\n    const projectInput = document.getElementById(\"project-input\");\n    const projectListEl = document.getElementById(\"project-list\");\n    const projectHeader = document.getElementById(\"header\");\n    // const taskButton = document.getElementById(\"add-task\");\n    \n    let projects = [];\n    let headerId;\n    let taskProperty;\n\n    //PROJECT FORM SUBMIT\n    projectForm.addEventListener('submit', function (event) {\n        event.preventDefault();\n        saveProject();\n        renderProject();\n        projectInput.value = \"\";\n    })\n\n    //SAVE PROJECT\n    function saveProject() {\n        const projectValue = projectInput.value;\n\n        projects.push({\n            value: projectValue,\n            tasks: []\n        });\n    }\n\n    //RENDER PROJECT\n    function renderProject() {\n        // CLEAR ELEMENT BEFORE A RE-RENDER\n        projectListEl.innerHTML = \"\";\n\n        // SHOW PROJECT\n        projects.forEach((project, index) => {\n            projectListEl.innerHTML += `\n        <div class=\"project\" id=${index}>${project.value}</div>`\n        })\n    }\n\n    //ADD CLICK EVENT LISTNER ON ALL PROJECT\n    projectListEl.addEventListener('click', (event) => {\n        const header = event.target;\n        headerId = Number(header.id)\n\n        let title = projects[headerId].value;\n        displayProjectHeader(title);\n\n        taskProperty = projects[headerId].tasks\n        //ADD DISPLAY TASKS HERE\n        renderTasks()\n    });\n    \n    \n    //DISPLAY PROJECT HEADER\n    function displayProjectHeader(title) {\n        projectHeader.innerText = title;\n    }\n\n    //ADD EVENT LISTNER TO ADD TASK BUTTON TO DISPLAY FORM\n    const newTaskButton = document.getElementById('add-task');\n    const popUpForm = document.querySelector('.pop-up');\n    newTaskButton.addEventListener(\"click\", function () {\n        popUpForm.style.display = \"block\";\n    })\n\n    //CLOSE FORM BUTTON\n    let popUpButton = document.querySelector(\".close\");\n    popUpButton.addEventListener(\"click\", function () {\n        popUpForm.style.display = \"none\";\n    })\n\n\n    //CONSTRUCTOR TO CREATE TASK\n    function Task(title, dueDate, priority, checked) {\n        this.title = title;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.checked = checked;\n    }\n\n    //ADD TASK TO PROJECT\n    \n    function addTaskElements() {\n        let title = document.getElementById(\"title\").value;\n        let dueDate = document.getElementById(\"due-date\").value;\n        let priority = document.querySelector(\".select-priority\").value;\n        let checked = false;\n\n        let newTask = new Task(title, dueDate, priority, checked)\n        taskProperty.push(newTask);\n\n    }\n\n    //ADD FUNCTIONALITY TO SUBMIT TASK BUTTON\n    document.querySelector(\".new-task-form\").addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    addTaskElements();\n    let taskForm = document.querySelector(\".new-task-form\");\n    taskForm.reset();\n        popUpForm.style.display = \"none\";\n        console.log(taskProperty);\n        console.log(projects);\n        // console.log(projects);\n    //ADD DISPLAY TASKS HERE\n        renderTasks();\n    })\n    \n    // RENDER TASK LIST\n    const taskListEl = document.querySelector(\".tasks-list\")\n    function renderTasks() {\n        taskListEl.innerHTML = \"\";\n        taskProperty.forEach((task, index) => {\n            taskListEl.innerHTML += `\n            <div class=\"task\" id=${index}>\n                <i class=\"bi ${task.checked ? 'bi-check-circle-fill' : 'bi bi-circle'}\"\n                data-action=\"check\" ></i>\n                <div class=\"title\">${task.title}</div>\n                <div class=\"due-date\">Due Date: ${task.dueDate}</div>\n                <div class=\"priority\">Priority: ${task.priority}</div>\n                <i class=\"bi bi-pencil-square\" data-action=\"edit\"></i>\n                <i class=\"bi bi-trash\"></i>\n            <div>`\n        })\n    }\n\n    //CLICK EVENT LISTENER FOR ALL TODOS\n    taskListEl.addEventListener('click', (event) => {\n        const target = event.target;\n        const parentElement = target.parentNode;\n\n        if (parentElement.className !== 'task') return;\n\n        // task id\n        const task = parentElement;\n        const taskId = Number(task.id);\n\n        //target action\n        const action = target.dataset.action;\n\n        action === \"check\" && checkTask(taskId);\n        action === \"edit\" && editTask(taskId);\n        // action === \"delete\" && deleteTodo(taskId);\n    });\n\n    //CHECK A TASK\n    function checkTask(taskId) {\n        taskProperty = taskProperty.map((task, index) => ({\n            ...task,\n            checked: index === taskId ? !task.checked : task.checked\n        }))\n        renderTasks();\n    }\n\n    //EDIT A TASK\n    function editTask(taskId) {\n        popUpForm.style.display = \"block\";\n        let title = document.getElementById(\"title\").value;\n        // let dueDate = document.getElementById(\"due-date\").value;\n        // let priority = document.querySelector(\".select-priority\").value;\n        // let checked = false;\n\n        title.value = taskProperty[taskId].title.value;\n\n        console.log(title);\n        // title = taskProperty[taskId].title;\n    }\n\n}\n\n\n\n    // function checkTask(index) {\n        \n        // }\n\n        //\n\n    // alert(\"test\");\n        // taskProperty = taskProperty.map((task, index) => ({\n        //     ...task,\n        //     checked: index === taskId ? !task.checked : task.checked\n        // }));\n        // renderTasks();\n\n    // projectHeader.innerHTML = `<h2>${title}</h2>`;\n    // projectHeader.innerHTML = \"\";\n    // const header = document.createElement('h2');\n    // header.textContent = title;\n    //     projectHeader.appendChild(header);\n        \n    // }\n\n    // addTaskElements(taskProperty);\n\n        \n        // addTaskElements(taskProperty);\n\n        // projects[headerId].tasks.push({\n        //     taskTitle: title,\n        //     dueDate: dueDate,\n        //     priority: priority,\n        // })\n\n        // console.log(projects);\n        // addTaskProperty(headerId);\n\n\n        //ADD TASK ELEMENTS\n    // addTaskElements(index) {\n\n    //     projects[index].tasks.push({\n    //         taskTitle: title,\n    //         due: dueDate,\n    //         taskPriority: priority,\n    //     })\n    // }\n    // taskProperty = {\n    //     taskTitle: title,\n    //     due: dueDate,\n    //     taskPriority: priority,\n    // }\n    \n\n\n    // \n    //CHECK TASK\n    // const checkButton = document.getElementById('check-button');\n    // checkButton.addEventListener(\"click\", function () {\n    //     if (checkButton.classList.contains(\"bi-circle\")) {\n    //         checkButton.classList.remove(\"bi-circle\");\n    //         checkButton.classList.add(\"bi-check-circle-fill\");\n    //     }\n    //     else if (checkButton.classList.contains(\"bi-check-circle-fill\")) {\n    //         checkButton.classList.remove(\"bi-check-circle-fill\");\n    //         checkButton.classList.add(\"bi-circle\");\n    //     }\n            \n    // })\n\n    // function checkTask(id) {\n    //     console.log(\"Gomitolo\");\n    // }\n    \n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;