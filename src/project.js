import { Task } from './task'



export class Project {
    constructor(title,type){
        this.title = title;
        this.tasks = [];
        this.type = type
        this.total = this.tasks.length
    }

    addTask(title, description, dueDate, priority, notes){
        let task = new Task(title,description,dueDate,priority,notes,this.title)
        this.tasks.push(task);
        this.resetTaskIndexes(tasks);
        return task;
    }

    getTotalTasks (){
       return this.tasks.length;
    }
    resetTaskIndexes(){
        let i=0;
        this.tasks.forEach(element => {
            element.index = i;
            i++;
        });
        return this.tasks;
    }

    

    getTasks(){
        this.tasks.slice(0).sort(function (a,b){
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            return x < y ? -1 : x > y ? 1:0
        })
    }

    getTasks(){
        this.tasks.slice(0).sort(function (a,b){
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            return x < y ? -1 : x > y ? 1:0
        })
    }


    removeTask(task){

        // do something
    }
}

