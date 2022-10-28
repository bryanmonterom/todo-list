import * as utilities from './utilities'
import { ToDoList } from './ToDoList' 
import { removeTask } from './ToDoList' 




const projectsNavBar= (projectType, projects)=>{

    let secondaryProjects = document.getElementById(projectType);
    secondaryProjects.innerHTML = "";
    let ul = utilities.createElement('ul','menu-items','','');
    projects.filter(a=> a.type ==projectType).forEach(element => {
        let li = utilities.createElement('li','menu-item','','')
        if(element.title == 'Home'){
            li.classList.add('active')
        }
        let labelName = utilities.createElement('label','menu',element.title,'')
        let badge = utilities.createElement('label',`badge`,element.getTotalTasks(),`badge-${element.title}`)
        li.appendChild(labelName);
        li.appendChild(badge);
        ul.appendChild(li);
    });
    secondaryProjects.appendChild(ul);
    return secondaryProjects;
}
 
export const  loadAlltasks = (tasks)=>{

    let cardContainer = document.getElementById('cards-container');
    cardContainer.innerHTML = "";
    tasks.forEach((element,i) => {

        // cardContainer.innerHTML = '';
        let card = utilities.createElement('div',`card,${element.priority}`,'');
        card.setAttribute("data-project",element.project)
        // card.setAttribute("data-index",element.getIndex)
        card.setAttribute("data-index",i)



        let carditemsOne = utilities.createElement('div','card-items');

        let cbox = utilities.createElement('input','','')

        cbox.type="checkbox";
        cbox.checked = element.status;

        let title = utilities.createElement('label','card-text',element.title)
        carditemsOne.appendChild(cbox);
        carditemsOne.appendChild(title);

        let carditemsTwo = utilities.createElement('div','card-items');
        let date = utilities.createElement('label','',element.dueDate)
        let button = utilities.createElement('input','btn-details')
        button.type="button";
        button.value ="Details"
        button.addEventListener('click',function(e){showModal()})
        let iconEdit = utilities.createElement('i','fa-solid,fa-pen-to-square')
        let iconTrash = utilities.createElement('i','fa-solid,fa-trash')
        // iconTrash.addEventListener('click',function(e){removeTask(e)});
        carditemsTwo.appendChild(button);
        carditemsTwo.appendChild(date);
        carditemsTwo.appendChild(iconEdit);
        carditemsTwo.appendChild(iconTrash);
        card.appendChild(carditemsOne);
        card.appendChild(carditemsTwo);
        cardContainer.appendChild(card);

    });
}

export const  loadAllTasksByProject = (tasks)=>{
    let cardContainer = document.getElementById('cards-container');
    cardContainer.innerHTML = "";
    tasks.forEach((element,i) => {

        // cardContainer.innerHTML = '';
        let card = utilities.createElement('div',`card,${element.priority}`,'');
        

        card.setAttribute("data-project",element.project)
        // card.setAttribute("data-index",element.getIndex)
        card.setAttribute("data-index",i)



        let carditemsOne = utilities.createElement('div','card-items');

        let cbox = utilities.createElement('input','','')

        cbox.type="checkbox";
        cbox.checked = element.status;

        let title = utilities.createElement('label','card-text',element.title)
        carditemsOne.appendChild(cbox);
        carditemsOne.appendChild(title);

        let carditemsTwo = utilities.createElement('div','card-items');
        let date = utilities.createElement('label','',element.dueDate)
        let button = utilities.createElement('input','btn-details')
        button.type="button";
        button.value ="Details"
        // button.addEventListener('click','kshowModal')
        let iconEdit = utilities.createElement('i','fa-solid,fa-pen-to-square')
        let iconTrash = utilities.createElement('i','fa-solid,fa-trash')
        // iconTrash.addEventListener('click',(e)=> {removeTask(e)});
        carditemsTwo.appendChild(button);
        carditemsTwo.appendChild(date);
        carditemsTwo.appendChild(iconEdit);
        carditemsTwo.appendChild(iconTrash);
        card.appendChild(carditemsOne);
        card.appendChild(carditemsTwo);
        cardContainer.appendChild(card);

    });
}




export function initializeSite (todo){

    let projects = todo.getAllProjects();
    projectsNavBar('main-projects',projects);
    projectsNavBar('secondary-projects',projects);
    projects.filter(a=> a.title == todo.currentProject).forEach(element => {
        loadAlltasks(element.tasks);

    });

}


//To update badge when a task is added o removed
export function resetBadge(tasks,projectName){
    console.log(tasks.length);
document.getElementById(`badge-${projectName}`).textContent  = tasks.length
loadAllTasksByProject(tasks)
}

export function showModal(e){
    // console.log(e);
    populateDetailsModal(e);
    var modal = document.getElementById('myModal');
    modal.style.display="block";

    span.onclick = function(){
        modal.style.display = 'none';
    }

    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none"
        }
    }
}

export function populateDetailsModal(task){
    document.getElementById('detail-taskTitle').textContent = task.project
    document.getElementById('detail-taskProject').textContent = task.title
    document.getElementById('detail-taskDate').textContent = task.dueDate
    document.getElementById('detail-taskDetails').textContent = task.description
}


function addEventsListener(){
    document.getElementById()
}

function addTaskEventListener(){
    document.getElementById('formTask').addEventListener(submit,AddTask)
}

export function AddTask(e,currentProject){
    resetBadge(e,currentProject)
    // console.log(formProps);

}


// this.title = title;
// this.description = description;
// this.dueDate = dueDate;
// this.priority = priority;
// this.notes = notes;
// this.status = false
// this.project = project;
// }