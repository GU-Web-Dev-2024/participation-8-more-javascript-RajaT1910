"use strict";

// Import modules
import {addTask, clearInput} from "./todo.js";
import { saveTasks, loadTasks } from "./storage";
// import * as storage from "./storage.js"

// setup DOM referances 
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-list");
const addTaskButton = document.getElementById("add-list");

const tasks = loadTasks();
task.forEach(task => {
    addTask(task, taskList);
});

addTaskButton.addEventListener("Click", ()=>{
    const task = newTaskInput.value.trim();
    if(task){
        addTask(task, taskList);
        tasks.push(tasks);
        saveTasks(tasks);
        clearInput(newTaskInput);
    }
    
    
});


