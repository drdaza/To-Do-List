import { extractPositionTask, isEmpty, Isrepeated } from "./AuxiliarFunction";
import { RemoveTasky, ModifyTasky } from "./TaskFunction.js";

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
            let space = document.getElementById("list");
            param.set(infoTask);
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
                let number = param.GetTask.indexOf(e.target.parentNode.parentNode.id);
                let modifyId = e.target.parentNode.parentNode.id;
                ModifyTasky(param, number,modifyId); 
                
            }
            if(e.target.classList=="tasky" || e.target.classList=="tasky active"){
                e.target.classList.toggle(`active`);
            }
            if(e.target.classList=="delete-button"){
                let number = param.GetTask.indexOf(e.target.parentNode.parentNode.id);
                let modifyId = e.target.parentNode.parentNode.id;
                RemoveTasky(param, number,modifyId);
            }
        }
        
    })
}


