import {ToDoList} from './ToDoList'
import {initializeSite} from './ui'


const todoList = new ToDoList();

initializeSite(todoList.getAllProjects())

console.log();