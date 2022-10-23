import { Project } from './project'
import { Task } from './task'


export class ToDoList {

    constructor() {
        this.projects = [];
        this.projects.push(new Project('Home', 'main-projects'));
        this.projects.push(new Project('Work', 'secondary-projects'));
        this.projects.push(new Project('College', 'secondary-projects'));
        this


        this.projects.push(new Project('Today', 'main-projects'));
        this.projects.push(new Project('Home Renovation', 'secondary-projects'));
        this.projects.push(new Project('Week', 'main-projects'));
        
    }

    addProject(project) {
        this.projects.push(project);
        return this.projects;
    }

    addTask(title, description, dueDate, priority, notes,projectName){

        let task = new Task(title,description,dueDate,priority,notes,projectName)
        let project = this.getProjectByName(projectName);
        project.tasks.push(task);
        this.resetTaskIndexes(project.tasks);
        return task;
    }

    resetTaskIndexes(tasks){
        let i=0;
        tasks.forEach(element => {
            element.setIndex = i;
            i++;
        });
        return this.tasks;
    }

    removeTask(project, taskId){
        this.projects.find(a => a.title == project).tasks.splice(taskId,1)
        
        // tasks.find(b=> b.getIndex == taskId).remove();
        this.resetTaskIndexes(this.projects.find(a => a.title == project).tasks);
        console.log(this.projects.find(a => a.title == project))
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