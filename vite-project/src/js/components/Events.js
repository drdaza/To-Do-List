import { extractPositionTask, isEmpty } from "./AuxiliarFunction";

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

        if(!isEmpty(infoTask)){
            console.log("hola");

            let space = document.getElementById("list");
            param.set(infoTask);
            console.log(param.GetTask);
            space.innerHTML += /* html */
            `
                <li class="tasky" id="task-${param.GetTask.length}">
                ${infoTask}
                <button class="edit-button" id="edit-button-${param.GetTask.length}">Edit </button>
                </li>
            `
        }
        else{
            alert ("The Task you are trying add is empty");
        }
        document.getElementById("task").value='';
    });
}
export function eventClickEditTask(param){
    let list = document.getElementById("list");
    list.addEventListener("click",(e)=>{
        if(e.target.id != "list"){
            if(e.target.classList=="edit-button"){
                console.log(e.target.id);
                let number = extractPositionTask(e.target.id);
                let modify = document.getElementById(`task-${number}`);

                let letra = prompt("Modify the actual task");
                console.log(letra);
                param.modifyTasks(number-1, letra);
                console.log(param.GetTask);
                modify.innerHTML = /* html */
                `   ${letra}
                   <button class="edit-button" id="edit-button-${number}">Edit </button>
                `;
            }
            if(e.target.classList=="tasky"){
                e.target.style = `text-decoration: line-through`;
            }
        }
        
    })
}
