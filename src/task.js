export class Task{
    constructor(title, description, dueDate, priority,  project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = false
        this.project = project;
    }

   set setIndex(index){
    this.index = index;
   }

   get getIndex(){
   return this.index;
   }
    changeTaskStatus(){
        this.status = !this.status
        return this;
    }

    
}
