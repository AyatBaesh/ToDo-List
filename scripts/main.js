//htmlElement.innerHTML = changes HTML inside chosen element

import {createTodo} from './functions.js';

let form = document.querySelector("#todo-list-form");
let taskTitle = document.querySelector("#todo-title");
let taskCompleted = document.querySelector("#todo-completed");
let taskCategory = document.querySelector("#todo-category");
let toDoList = document.querySelector("#todo-list");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");

function render(todo){
    toDoList.insertAdjacentHTML("beforeend",`<li class = todo-task>${todo.icon} <strong> ${todo.title}
     - by ${todo.author.firstName} ${todo.author.lastName} in category ${todo.category}</li>`);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();//prevents auto refresh after submitting
    let author = {
        first: firstName.value,
        last: lastName.value
    };
    let values = {
        todoTitle: taskTitle.value,
        completed: taskCompleted.checked,
        chosenCategory: taskCategory.value,
        user: author
    };
    
    let todo = createTodo(values);
    // taskTitle.value = "";
    render(todo);
})
