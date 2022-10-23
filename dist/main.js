(()=>{"use strict";class t{constructor(t,e){this.title=t,this.tasks=[],this.type=e,this.total=this.tasks.length}getTotalTasks(){return this.tasks.length}resetTaskIndexes(){let t=0;return this.tasks.forEach((e=>{e.index=t,t++})),this.tasks}getTasks(){this.tasks.slice(0).sort((function(t,e){var s=t.title.toLowerCase(),a=e.title.toLowerCase();return s<a?-1:s>a?1:0}))}getTasks(){this.tasks.slice(0).sort((function(t,e){var s=t.title.toLowerCase(),a=e.title.toLowerCase();return s<a?-1:s>a?1:0}))}removeTask(t){}}class e{constructor(t,e,s,a,i,r){this.title=t,this.description=e,this.dueDate=s,this.priority=a,this.notes=i,this.status=!1,this.project=r}set setIndex(t){this.index=t}get getIndex(){return this.index}changeTaskStatus(){return this.status=!this.status,this}}function s(t,e,s,a){let i=document.createElement(t);return i.textContent=s,i.id=a,""!=e&&e.split(",").forEach((t=>{i.classList.add(t)})),""==a?(i.classList.add(e),i):i}const a=(t,e)=>{let a=document.getElementById(t);a.innerHTML="";let i=s("ul","menu-items","","");return e.filter((e=>e.type==t)).forEach((t=>{let e=s("li","menu-item","","");"Home"==t.title&&e.classList.add("active");let a=s("label","menu",t.title,""),r=s("label","badge",t.getTotalTasks(),`badge-${t.title}`);e.appendChild(a),e.appendChild(r),i.appendChild(e)})),a.appendChild(i),a},i=new class{constructor(){this.projects=[],this.projects.push(new t("Home","main-projects")),this.projects.push(new t("Work","secondary-projects")),this.projects.push(new t("College","secondary-projects")),this.projects.push(new t("Today","main-projects")),this.projects.push(new t("Home Renovation","secondary-projects")),this.projects.push(new t("Week","main-projects"))}addProject(t){return this.projects.push(t),this.projects}addTask(t,s,a,i,r,o){let n=new e(t,s,a,i,r,o),d=this.getProjectByName(o);return d.tasks.push(n),this.resetTaskIndexes(d.tasks),n}resetTaskIndexes(t){let e=0;return t.forEach((t=>{t.setIndex=e,e++})),this.tasks}removeTask(t,e){this.projects.find((e=>e.title==t)).tasks.splice(e,1),this.resetTaskIndexes(this.projects.find((e=>e.title==t)).tasks),console.log(this.projects.find((e=>e.title==t)))}getAllProjects(){return this.projects}getProjectByName(t){return this.projects.find((e=>e.title==t))}getTasksByProject(t){return this.projects.filter((e=>e.title==t)).tasks}};var r;i.addTask("Test TASK 1","This is just a test","10/23/2022","High","No notes","Home"),i.addTask("Test TASK 2","This is just a test","10/23/2022","Low","No notes","Home"),i.addTask("Test TASK 3","This is just a test","10/23/2022","Medium","No notes","Home"),i.addTask("Test TASK 3","This is just a test","10/23/2022","Medium","No notes","Home"),a("main-projects",r=i.getAllProjects()),a("secondary-projects",r),r.forEach((t=>{(t=>{let e=document.getElementById("cards-container");t.forEach((t=>{let a=s("div",`card,${t.priority}`,"");a.setAttribute("data-project",t.project),a.setAttribute("data-index",t.getIndex);let i=s("div","card-items"),r=s("input","","");r.type="checkbox",r.checked=t.status;let o=s("label","card-text",t.title);i.appendChild(r),i.appendChild(o);let n=s("div","card-items"),d=s("label","",t.dueDate),l=s("input","");l.type="button",l.value="Details";let c=s("i","fa-solid,fa-pen-to-square"),h=s("i","fa-solid,fa-trash");n.appendChild(l),n.appendChild(d),n.appendChild(c),n.appendChild(h),a.appendChild(i),a.appendChild(n),e.appendChild(a)}))})(t.tasks)}));let o=document.getElementsByClassName("fa-trash")[0];console.log(o),o.addEventListener("click",(t=>{let e=t.target.parentNode.parentNode;i.removeTask(e.getAttribute("data-project"),e.getAttribute("data-index")),e.remove()}))})();