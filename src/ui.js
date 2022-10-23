import * as utilities from './utilities'
import { ToDoList } from './ToDoList' 



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

    
    tasks.forEach(element => {

        // cardContainer.innerHTML = '';
        let card = utilities.createElement('div',`card,${element.priority}`,'');
        

        card.setAttribute("data-project",element.project)
        card.setAttribute("data-index",element.getIndex)


        let carditemsOne = utilities.createElement('div','card-items');

        let cbox = utilities.createElement('input','','')

        cbox.type="checkbox";
        cbox.checked = element.status;

        let title = utilities.createElement('label','card-text',element.title)
        carditemsOne.appendChild(cbox);
        carditemsOne.appendChild(title);

        let carditemsTwo = utilities.createElement('div','card-items');
        let date = utilities.createElement('label','',element.dueDate)
        let button = utilities.createElement('input','')
        button.type="button";
        button.value ="Details"
        let iconEdit = utilities.createElement('i','fa-solid,fa-pen-to-square')
        let iconTrash = utilities.createElement('i','fa-solid,fa-trash')
        // iconTrash.addEventListener('click', removeTask);
        carditemsTwo.appendChild(button);
        carditemsTwo.appendChild(date);
        carditemsTwo.appendChild(iconEdit);
        carditemsTwo.appendChild(iconTrash);
        card.appendChild(carditemsOne);
        card.appendChild(carditemsTwo);
        cardContainer.appendChild(card);

    });


}


export function initializeSite (projects){

    projectsNavBar('main-projects',projects);
    projectsNavBar('secondary-projects',projects);

    projects.forEach(element => {
         loadAlltasks(element.tasks);
    });

}



{/* <div class="card high">
<div class="card-items">
    <input type="checkbox" name="" id="">
    <label>Task 1</label>
</div>
<div class="card-items">
    <input type="button" value="Details">
    <label>10/23/2022</label>
    <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-trash"></i>
</div>
</div> */}