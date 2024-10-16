"use strict";

// save task to local storage
function saveTasks(tasks){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// load tasks from local storage
function loadTasks(){
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

export {saveTasks, loadTasks};