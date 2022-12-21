import { Project } from './project'
import * as utilities from './utilities'

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
        this.projects.push(new Project(project, 'secondary-projects'));
        // this.projects.push(project);
        return this.projects;
    }

    addTask(title, description, dueDate, priority, projectName){

        let task = new Task(title,description,dueDate,priority,projectName)
        let project = this.getProjectByName(projectName);
        project.tasks.push(task);
        return project.tasks;
    }

    modifyTask(task){

        console.log(task)

        let tasktoEdit = this.projects.find(a => a.title == task.mprojectName).tasks.find(b=> b.title == task.mformType);       
        tasktoEdit.title = task.mtaskName
        tasktoEdit.description = task.text
        tasktoEdit.dueDate = task.mtaskDueDate
        tasktoEdit.priority = task.mpriority

       
        let project = this.getProjectByName(task.mprojectName);
        console.log(project.tasks)
        return project.tasks;
    }


    changeTaskStatus(projectName, task){

        let tasktoEdit = this.projects.find(a => a.title == projectName).tasks[task];       
        tasktoEdit.status = !tasktoEdit.status
        return tasktoEdit;
    }

    removeTask(project, taskId){

       let pjct =  this.projects.find(a => a.title == project)
       pjct.tasks.splice(taskId,1);
       return pjct.tasks;
      
    }

    // getTask(project, taskId){

    //     let task =  this.projects.find(a => a.title == project).tasks[taskId]
    //     // pjct.tasks.splice(taskId,1);
    //     //  ui.resetBadge(pjct)
    //     //  removeBtnEventListener();.
    //     return task;
    //  }
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

    getTasksByProject(title,taskId) {
        let pjct =this.projects.find(a => a.title == title).tasks[taskId]

        return pjct;
        // .tasks[taskId]
    }


}



const todoList = new ToDoList();

todoList.addTask('Test TASK 1', 'This is just a test', '2022-10-23', 'High', 'Personal')
todoList.addTask('Test TASK 2', 'This is just a test', '2022-10-23', 'Low', 'Personal')
todoList.addTask('Test TASK 3', 'This is just a test', '2022-10-23', 'Medium','Personal')
todoList.addTask('Test TASK 4', 'This is just a test', '2022-10-23', 'Medium','Personal')


todoList.addTask('Test TASK 1', 'This is just a test', '2022-10-23', 'High','Work')
todoList.addTask('Test TASK 2', 'This is just a test', '2022-10-23', 'Low','Work')
todoList.addTask('Test TASK 3', 'This is just a test', '2022-10-23', 'Medium', 'College')
todoList.addTask('Test TASK 4', 'This is just a test', '2022-10-23', 'Medium', 'College')
// initializeSite(todoList.getProjects())


// Add event listeners

function addTaskEventListener(){
        
    document.getElementById('formTask').addEventListener('submit',(e)=>{
        e.preventDefault();
        AddTask(e);
    })

    document.getElementById('formModifyTask').addEventListener('submit',(e)=>{
        e.preventDefault();
        ModifyTask(e);
    })

    
}

function addDetailsBtnEventListener(){
    for (let item of document.getElementsByClassName('btn-details')) {
        item.addEventListener('click', showModal)
    }
}

function addCheckboxBtnEventListener(){
    for (let item of document.getElementsByClassName('checkbox')) {
        item.addEventListener('click', changeTaskStatus)
    }
}


function addNewTaskBtnEventListener(){
        document.getElementById('btnAdd').addEventListener('click', showModalAddNew)
}

function addTaskFormBtnEventListener(){
    document.getElementById('tasksForm').addEventListener('click', buildFormTask)
}

function addTaskProjectBtnEventListener(){
    document.getElementById('projectsForm').addEventListener('click', buildFormProject)
}

function addNavbarEventListener(){
    let menuItems = document.getElementsByClassName('menu-item');
    for (let index = 2; index < menuItems.length; index++) {
        menuItems[index].addEventListener('click',loadProjectsByName);
    }
}

function removeBtnEventListener(){
    for (let item of document.getElementsByClassName('fa-trash')) {
        item.addEventListener('click', removeTaskFromProject)
    }
}

function addEditBtnEventListener(){
    for (let item of document.getElementsByClassName('fa-pen-to-square')) {
        item.addEventListener('click', showModalModify)
    }
}
// Add event listeners

export const removeTaskFromProject=(e) =>{
    let card  = e.target.parentNode.parentNode;
    let projectName = card.getAttribute("data-project")
    let index = card.getAttribute("data-index")
    let tasks = todoList.removeTask(projectName,index)
    ui.resetBadge(tasks, projectName)
    removeBtnEventListener();
    addEditBtnEventListener()
    addDetailsBtnEventListener();
    }


  


   function showModalAddNew(e){
    ui.showModalAddNew(e)
   }

   function showModalModify(e){
    let card  = e.target.parentNode.parentNode;
    let task = todoList.getTasksByProject(card.getAttribute("data-project"),card.getAttribute("data-index"))
   
    ui.showModalModify(task)
   }

   function buildFormTask(){
    ui.buildFormTask()
   }

   function buildFormProject(){
    ui.buildFormProject()
   }

   function loadProjectsByName(e){
    utilities.setActive(e)
    let target = e.target;
    let projectName = target.getAttribute('project-name')
    let projects =todoList.getProjectByName(projectName);
    todoList.currentProject = projectName
    ui.loadAllTasksByProject(projects.tasks)

    // console.log(projects)
   }


   

    function AddTask(e){
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        console.log(formProps)


        if (formProps.formType=="task"){
            let tasks = todoList.addTask(formProps.taskName, formProps.text, formProps.taskDueDate, formProps.priority, todoList.currentProject)
            ui.AddTask(tasks, todoList.currentProject)
            removeBtnEventListener();
            addDetailsBtnEventListener();
            addEditBtnEventListener();
            addCheckboxBtnEventListener();
            return
        }
        else{
            let projects = todoList.addProject(formProps.projectName)
            console.log(projects)
            ui.projectsNavBar('secondary-projects', projects)
            addNavbarEventListener();
        
            return
        }
        }
        

    function showModal(e){
        // console.log(e);
    let card  = e.target.parentNode.parentNode;
    let task = todoList.getTasksByProject(card.getAttribute("data-project"),card.getAttribute("data-index"))
    ui.showModal(task)
}

function ModifyTask(e){
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        let task = todoList.modifyTask(formProps)

        ui.loadAllTasksByProject(task)
        removeBtnEventListener();
        addDetailsBtnEventListener();
        addEditBtnEventListener();
        addCheckboxBtnEventListener();


}

function changeTaskStatus(e){
    let card  = e.target.parentNode.parentNode;
    card.classList.toggle('done');
    let projectName = card.getAttribute("data-project")
    let index = card.getAttribute("data-index")
    let tasks = todoList.changeTaskStatus(projectName,index)
    console.log(tasks)

}




    ui.initializeSite(todoList)
    removeBtnEventListener();
    addDetailsBtnEventListener();
    addTaskEventListener();
    addNewTaskBtnEventListener();
    addTaskFormBtnEventListener();
    addTaskProjectBtnEventListener();
    addNavbarEventListener();
    addEditBtnEventListener();
    addCheckboxBtnEventListener();
