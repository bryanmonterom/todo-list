import {ToDoList as Logic} from './ToDoList'
import {initializeSite} from './ui'


const todoList = new Logic();

todoList.addTask('Test TASK 1', 'This is just a test', '10/23/2022', 'High', 'No notes','Home')
todoList.addTask('Test TASK 2', 'This is just a test', '10/23/2022', 'Low', 'No notes','Home')
todoList.addTask('Test TASK 3', 'This is just a test', '10/23/2022', 'Medium', 'No notes','Home')
todoList.addTask('Test TASK 3', 'This is just a test', '10/23/2022', 'Medium', 'No notes','Home')

// initializeSite(todoList.getProjects())
initializeSite(todoList.getAllProjects())


const removeTask=(e) =>{
    let card  = e.target.parentNode.parentNode;
    todoList.removeTask(card.getAttribute("data-project"),card.getAttribute("data-index"))
    card.remove();
    }
    
let iconTrash = document.getElementsByClassName('fa-trash')[0];
console.log(iconTrash)
iconTrash.addEventListener('click', removeTask);




    

