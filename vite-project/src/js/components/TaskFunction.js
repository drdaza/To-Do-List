import { isEmpty, Isrepeated, extractPositionTask } from "./AuxiliarFunction";
    
export function RemoveTasky(param, number,id){
    let modify = document.getElementById(`${id}`);
    let list = document.getElementById(`list`);
    param.deleteTasks(number);
    
    list.removeChild(modify);
}
export function ModifyTasky(param, number,id){
    let modify = document.getElementById(`${id}`);
    let letra = prompt("Modify the actual task");
    if(!isEmpty(letra) && Isrepeated(param.GetTask, letra)==-1 ){
    param.modifyTasks(number, letra);
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