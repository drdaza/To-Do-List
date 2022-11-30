import { extractPositionTask, isEmpty, Isrepeated } from "./AuxiliarFunction";

import List from "./List";

export function createList(){
        let ListObj = new List();
        eventClickAddTask(ListObj);
        eventClickEditTask(ListObj);
}

export function eventClickAddTask(param){
    let TaskButton = document.getElementById("add-task");
    
    TaskButton.addEventListener("click", ()=>{  
        let infoTask = document.getElementById("task").value;

        if(!isEmpty(infoTask) && Isrepeated(param.GetTask, infoTask)==-1 ){
            console.log();


            let space = document.getElementById("list");
            param.set(infoTask);
            console.log(param.GetTask);
            space.innerHTML += /* html */
            `
                <li class="tasky"  id="${infoTask}">
                <label>
                    ${infoTask}
                </label>
                <div>
                <button class="edit-button" id="edit-button-${infoTask}">Edit </button>
                <button class="delete-button" id="delete-button-${infoTask}">Delete </button>
                </div>
                </li>
            `
        }
        else{
            alert ("The Task you are trying add is empty or the task exist");
        }
        document.getElementById("task").value='';
    });
}
export function eventClickEditTask(param){
    let list = document.getElementById("list");
    list.addEventListener("click",(e)=>{
        if(e.target.id != "list"){
            if(e.target.classList=="edit-button"){
                console.log(e.target.parentNode.parentNode.id);
                let number = param.GetTask.indexOf(e.target.parentNode.parentNode.id);
                let modifyId = e.target.parentNode.parentNode.id;
                /* list.replaceChild(e.target.parentNode.parentNode) */
                ModifyTasky(param, number,modifyId); 
                
            }
            if(e.target.classList=="tasky" || e.target.classList=="tasky active"){
                e.target.classList.toggle(`active`);
            }
            if(e.target.classList=="delete-button"){
                console.log(e.target.parentNode.parentNode.id);
                let number = param.GetTask.indexOf(e.target.parentNode.parentNode.id);
                let modifyId = e.target.parentNode.parentNode.id;
                console.log(number);
                RemoveTasky(param, number,modifyId);
            }
        }
        
    })
}

export function RemoveTasky(param, number,id){
    let modify = document.getElementById(`${id}`);
    let list = document.getElementById(`list`);
    param.deleteTasks(number);
    
    list.removeChild(modify);
    console.log(param.GetTask);
    /* if(param.GetTask.length>list.children.length){param.GetTask.pop();} */
}
export function ModifyTasky(param, number,id){
    let modify = document.getElementById(`${id}`);
    let letra = prompt("Modify the actual task");
    if(!isEmpty(letra) && Isrepeated(param.GetTask, letra)==-1 ){
    console.log(letra);
    param.modifyTasks(number, letra);
    console.log(param.GetTask);
    modify.id = `${letra}`;
    modify.innerHTML = /* html */
                    `   
                    
                    <label>
                        ${letra}
                    </label>
                    <div>
                    <button class="edit-button" id="edit-button-${letra}">Edit </button>
                    <button class="delete-button" id="delete-button-${letra}">Delete </button>
                    </div>
                    
                    `;
                }
}