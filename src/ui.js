import * as utilities from './utilities'


const projectsNavBar= (projectType, projects)=>{

    let secondaryProjects = document.getElementById(projectType);
    secondaryProjects.innerHTML = "";
    let ul = utilities.createElement('ul','menu-items','');
    projects.filter(a=> a.type ==projectType).forEach(element => {
        let li = utilities.createElement('li','menu-item')
        if(element.title == 'Home'){
            li.classList.add('active')
        }
        let labelName = utilities.createElement('label','menu',element.title)
        let badge = utilities.createElement('label',`badge`,element.total,`badge-${element.title}`)
        li.appendChild(labelName);
        li.appendChild(badge);
        ul.appendChild(li);
    });
    secondaryProjects.appendChild(ul);
    return secondaryProjects;
}
 
export function initializeSite (projects){

    console.log(projectsNavBar('main-projects',projects));
    console.log(projectsNavBar('secondary-projects',projects));

}

{/* <label class="menu-item">Projects</label>
<nav id="secondary-projects">
    <ul class="menu-items">
        <li class="menu-item">
            <label class="menu">Home</label>
            <label id= "badge-home" class="badge">11</label>
        </li>
        <li class="menu-item ">
            <label class="menu">Today</label>
            <label id= "badge-today" class="badge">11</label>
        </li>
        <li class="menu-item ">
            <label class="menu">Week</label>
            <label id= "badge-week" class="badge">11</label>
        </li>
    </ul>
</nav> */}