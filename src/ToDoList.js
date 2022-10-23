import {Project} from './project'


// const task = new Task('Clean dishes','Clean all the dishes from the kitchen','10/22/2022','High','No notes');
// console.log(task);

// const defaultProject = new Projects('Default');
// defaultProject.addTask(task);

// console.log(defaultProject);


export class ToDoList{

    constructor(){
        this.projects = [];
        this.projects.push(new Project('Home'));
        this.projects.push(new Project('Inbox'));
        this.projects.push(new Project('Week'));
    }

    addProject(project){
        this.projects.push(project)
        return this.projects;
    }

    getAllProjects(){
        return this.projects;
    }

    getTasksByProject(title){
        return this.getAllProjects().filter(a=> a.title = title).tasks
    }

}