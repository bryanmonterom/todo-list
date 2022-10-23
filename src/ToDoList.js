import {Project} from './project'


// const task = new Task('Clean dishes','Clean all the dishes from the kitchen','10/22/2022','High','No notes');
// console.log(task);

// const defaultProject = new Projects('Default');
// defaultProject.addTask(task);

// console.log(defaultProject);


export class ToDoList{

    constructor(){
        this.projects = [];
        this.projects.push(new Project('Home','main-projects'));
        this.projects.push(new Project('Work','secondary-projects'));
        this.projects.push(new Project('Today','main-projects'));
        this.projects.push(new Project('College','secondary-projects'));
        this.projects.push(new Project('Week','main-projects'));
    }

    addProject(project){
        this.projects.push(project);
        return this.projects;
    }

    getAllProjects(){

        var byName = this.projects.slice(0);
        byName.sort(function(a,b) {
            var x = a.type.toLowerCase();
            var y = b.type.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
});
        return byName;
    }

    getTasksByProject(title){
        return this.getAllProjects().filter(a=> a.title = title).tasks
    }

}