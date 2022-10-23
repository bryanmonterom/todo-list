
export class Project {
    constructor(title,type){
        this.title = title;
        this.tasks = [];
        this.type = type
        this.total = this.tasks.length
    }

    addTask(task){
        this.tasks.push(task)
    }

    removeTask(task){

        // do something
    }
}

