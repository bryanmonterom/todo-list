import * as utilities from './utilities'
import { ToDoList } from './ToDoList' 
import { removeTask } from './ToDoList' 
import parseISO from 'date-fns/parseISO'
import {format} from 'date-fns/fp'






export const projectsNavBar= (projectType, projects)=>{

    let secondaryProjects = document.getElementById(projectType);
    secondaryProjects.innerHTML = "";
    let ul = utilities.createElement('ul','menu-items','','');
    projects.filter(a=> a.type ==projectType).forEach(element => {
        let li = utilities.createElement('li','menu-item','','')
        li.setAttribute('project-name', element.title)
        if(element.title == 'Personal'){
            li.classList.add('active')
        }
        let labelName = utilities.createElement('label','menu',element.title,'')
        labelName.setAttribute('project-name', element.title)
        let badge = utilities.createElement('label',`badge`,element.getTotalTasks(),`badge-${element.title}`)
        badge.setAttribute('project-name', element.title)
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
        if(element.status == true){
            card.classList.add('done')
        }
        card.setAttribute("data-project",element.project)
        // card.setAttribute("data-index",element.getIndex)
        card.setAttribute("data-index",i)
        let carditemsOne = utilities.createElement('div','card-items');

        let cbox = utilities.createElement('input','checkbox','')

        cbox.type="checkbox";
        cbox.checked = element.status;

        let title = utilities.createElement('label','card-text',element.title)
        carditemsOne.appendChild(cbox);
        carditemsOne.appendChild(title);

        let carditemsTwo = utilities.createElement('div','card-items');
        console.log() // not MM-DD-YY
        // console.log(format(parseISO('10-23-2022'), "dd-MM-yyyy"));

        let date = utilities.createElement('label','',element.dueDate)
        let button = utilities.createElement('input','btn-details')
        button.type="button";
        button.value ="Details"
        // button.addEventListener('click',function(e){showModal(e)})
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
        if(element.status == true){
            card.classList.add('done')
        }
        let carditemsOne = utilities.createElement('div','card-items');
        let cbox = utilities.createElement('input','checkbox','')

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

    // removeBtnEventListener();
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
document.getElementById(`badge-${projectName}`).textContent  = tasks.length
loadAllTasksByProject(tasks)
}

export function showModal(e){
     var btn = document.getElementById("myBtn")
        var span = document.getElementsByClassName("close")[0]
    populateDetailsModal(e);
    var modal = document.getElementById('myModal');
    modal.style.display="block";

    //  btn.onclick=function(){
    //         modal.style.display="block";
    //     }

    span.onclick = function(){
        modal.style.display = 'none';
    }

    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none"
        }
    }
}

export function showModalAddNew(e){
    var btn = document.getElementById("closeAddForm")
       var span = document.getElementsByClassName("close")[1]
   var modal = document.getElementById('addForm');
   modal.style.display="block";

    btn.onclick=function(){
           modal.style.display="block";
       }

   span.onclick = function(){
       modal.style.display = 'none';
   }

   window.onclick = function(event){
       if(event.target == modal){
           modal.style.display = "none"
       }
   }
}

export function showModalModify(e){
    var btn = document.getElementById("closeAddForm")
       var span = document.getElementsByClassName("close")[2]
       populateModifyModal(e);
   var modal = document.getElementById('modifyForm');
   modal.style.display="block";

    btn.onclick=function(){
           modal.style.display="block";
       }

   span.onclick = function(){
       modal.style.display = 'none';
   }

   window.onclick = function(event){
       if(event.target == modal){
           modal.style.display = "none"
       }
   }
}

populateModifyModal
export function populateModifyModal(task){
    document.getElementById('mtaskName').value = task.title
    document.getElementById('mformType').value = task.title

    document.getElementById('mtaskDetails').value = task.description
    document.getElementById('mtaskDueDate').value = task.dueDate
    document.getElementById('mprojectName').value = task.project
    document.getElementById('mindex').value = task.index


    document.getElementById(`mpriority-${task.priority}`).checked = true;
}

export function populateDetailsModal(task){
    document.getElementById('detail-taskTitle').textContent = task.project
    document.getElementById('detail-taskProject').textContent = task.title
    document.getElementById('detail-taskDate').textContent = task.dueDate
    document.getElementById('detail-taskDetails').textContent = task.description
}


export function AddTask(e,currentProject){
    resetBadge(e,currentProject)
    // console.log(formProps);

}

export function buildFormTask(){
    let form = document.getElementById('formTask')
    form.innerHTML = ''
    form.innerHTML = `<input type="text" class="full" placeholder="Title: Pay bills" name="taskName" id="taskName">
    <input type="text"  id="formType" name="formType" value="task" hidden>
    <textarea name="text" class="full textarea" placeholder="Details: eg internet, phone, rent" cols="40" rows="5" id="taskDetails"></textarea>
    <div class="form-group">
        <label class="form-field-title">Due Date:</label>
        <input type="date" class="" placeholder="Due date" name="taskDueDate" id="taskDueDate">
    </div>
    <div class="form-group between">
        <div class="form-fields" >
            <div class="form-priority">
                <div class="form-priority-title">
                    <label class="form-field-title">Priority:</label>
                   </div>
                   <div class="">
                    <input type="radio" id="priority-Low" name="priority" value="Low" >
                    <label for="priority-Low" class= "priority low" >Low</label>
                    <input type="radio" id="priority-Medium" name="priority" value="Medium" >
                    <label for="priority-Medium" class= "priority medium" >Medium</label>
                    <input type="radio" class= "" id="priority-High" name="priority" value="High" >
                    <label for="priority-High" class="priority high" >High</label>
                </div>
            </div>
        </div>
      <div class="form-btn">
        <input type="submit" value="Add task">
      </div>
    </div>`

}

export function buildFormProject(){
    let form = document.getElementById('formTask')
    form.innerHTML = ''
    form.innerHTML = ` <input type="text" class="full" placeholder="Title: Become a Developer" name="projectName" id="projectName">
                        <input type="text"  id="formType" name="formType" value="project" hidden>
                    <div class="form-group between">
                    <div class="form-btn">
                      <input type="submit" value="Add project">
                    </div>
                  </div>`

}


// function removeBtnEventListener(){
//     for (let item of document.getElementsByClassName('fa-trash')) {
//         item.addEventListener('click', removeTaskFromProject)
//     }
// }


// export const removeTaskFromProject=(e) =>{
//     let card  = e.target.parentNode.parentNode;
//     todoList.removeTask(card.getAttribute("data-project"),card.getAttribute("data-index"))
//     // card.remove();
//     }

// this.title = title;
// this.description = description;
// this.dueDate = dueDate;
// this.priority = priority;
// this.notes = notes;
// this.status = false
// this.project = project;
// }