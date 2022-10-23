
export class Project {
    constructor(title){
        this.title = title;
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task)
    }

    removeTask(task){

        // do something
    }
}

