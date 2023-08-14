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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n \n \n\n\n(0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createProjects)();\n(0,_tasks_js__WEBPACK_IMPORTED_MODULE_1__.createTasks)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjects: () => (/* binding */ createProjects)\n/* harmony export */ });\n// import { createTasks } from \"./tasks.js\"; \n// createTasks();\n\nfunction createProjects() {\n    \n    const projectForm = document.getElementById(\"project-form\");\n    const projectInput = document.getElementById(\"project-input\");\n    const projectListEl = document.getElementById(\"project-list\");\n    const projectHeader = document.getElementById(\"header\");\n\n    let projects = [];\n\n    //PROJECT FORM SUBMIT\n    projectForm.addEventListener('submit', function (event) {\n        event.preventDefault();\n        saveProject();\n        renderProject();\n        projectInput.value = \"\";\n    })\n\n    //SAVE PROJECT\n    function saveProject() {\n        const projectValue = projectInput.value;\n\n        projects.push({\n            value: projectValue,\n            tasks: []\n        });\n    }\n\n    //RENDER PROJECT\n    function renderProject() {\n        // CLEAR ELEMENT BEFORE A RE-RENDER\n        projectListEl.innerHTML = \"\";\n\n        // SHOW PROJECT\n        projects.forEach((project, index) => {\n            projectListEl.innerHTML += `\n        <div class=\"project\" id=${index}>${project.value}</div>`\n        })\n    }\n\n    //ADD CLICK EVENT LISTNER ON ALL PROJECT\n    projectListEl.addEventListener('click', (event) => {\n        const header = event.target;\n\n        const headerId = Number(header.id)\n\n        let title = projects[headerId].value;\n\n        displayProjectHeader(title);\n\n    })\n    \n    //DISPLAY PROJECT HEADER\n    function displayProjectHeader(title) {\n        projectHeader.innerText = title;\n    }\n}\n\n\n\n\n    // projectHeader.innerHTML = `<h2>${title}</h2>`;\n    // projectHeader.innerHTML = \"\";\n    // const header = document.createElement('h2');\n    // header.textContent = title;\n    //     projectHeader.appendChild(header);\n        \n    // }\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTasks: () => (/* binding */ createTasks)\n/* harmony export */ });\n\nfunction createTasks() {\n\n    const taskButton = document.getElementById(\"add-task\");\n\n    \n\n    \n\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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