import { Project } from './project'
import { Task } from './task'
import * as ui from './ui'



export class ToDoList {

    constructor() {
        this.projects = [];
        this.projects.push(new Project('Personal', 'main-projects'));
        this.projects.push(new Project('Work', 'main-projects'));
        this.projects.push(new Project('College', 'main-projects'));
        this.projects.push(new Project('Learn React', 'secondary-projects'));
        this.projects.push(new Project('Odin Project', 'secondary-projects'));
        this.projects.push(new Project('Week', 'secondary-projects'));
        this.currentProject = "Personal";
    }
    addProject(project) {
        this.projects.push(project);
        return this.projects;
    }

    addTask(title, description, dueDate, priority, notes,projectName){

        let task = new Task(title,description,dueDate,priority,notes,projectName)
        let project = this.getProjectByName(projectName);
        project.tasks.push(task);
        return project.tasks;
    }

    removeTask(project, taskId){

       let pjct =  this.projects.find(a => a.title == project)
       pjct.tasks.splice(taskId,1);
        ui.resetBadge(pjct)
        removeBtnEventListener();
    }

    getAllProjects() {
    //   this.projects = this.projects.slice(0).sort(function (a, b) {
    //         var x = a.type.toLowerCase();
    //         var y = b.type.toLowerCase();
    //         return x < y ? -1 : x > y ? 1 : 0;
    //     });
        return this.projects;
    }

    getProjectByName(projectName){
        return this.projects.find(a => a.title == projectName);
    }

    getTasksByProject(title) {
        return this.projects.filter(a => a.title == title).tasks
    }

}



const todoList = new ToDoList();

todoList.addTask('Test TASK 1', 'This is just a test', '10/23/2022', 'High', 'No notes','Personal')
todoList.addTask('Test TASK 2', 'This is just a test', '10/23/2022', 'Low', 'No notes','Personal')
todoList.addTask('Test TASK 3', 'This is just a test', '10/23/2022', 'Medium', 'No notes','Personal')
todoList.addTask('Test TASK 4', 'This is just a test', '10/23/2022', 'Medium', 'No notes','Personal')


todoList.addTask('Test TASK 1', 'This is just a test', '10/23/2022', 'High', 'No notes','Work')
todoList.addTask('Test TASK 2', 'This is just a test', '10/23/2022', 'Low', 'No notes','Work')
todoList.addTask('Test TASK 3', 'This is just a test', '10/23/2022', 'Medium', 'No notes','College')
todoList.addTask('Test TASK 4', 'This is just a test', '10/23/2022', 'Medium', 'No notes','College')
// initializeSite(todoList.getProjects())




export const removeTaskFromProject=(e) =>{
    let card  = e.target.parentNode.parentNode;
    todoList.removeTask(card.getAttribute("data-project"),card.getAttribute("data-index"))
    // card.remove();
    }


    function removeBtnEventListener(){
        for (let item of document.getElementsByClassName('fa-trash')) {
            item.addEventListener('click', removeTaskFromProject)
        }
    }

    function detailsBtnEventListener(){
        for (let item of document.getElementsByClassName('btn-details')) {
            item.addEventListener('click', showModal)
        }
    }

    function showModal(e){
     

    let card  = e.target.parentNode.parentNode;
    ui.showModal(e)
    // modal.textContent += card;

}

    ui.initializeSite(todoList)
    removeBtnEventListener();
    detailsBtnEventListener();
