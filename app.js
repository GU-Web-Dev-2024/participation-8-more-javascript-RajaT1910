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

addTaskButton.addEventListener("Click", ()=>{
    const task = newTaskInput.value.trim();
    tasks.push(tasks);
    
}

function ()
