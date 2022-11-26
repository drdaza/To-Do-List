import { isEmpty } from "./AuxiliarFunction";
import { setupCounter } from "./counter";
import List from "./List";

export function createList(){
        let ListObj = new List();
        eventClickAddTask(ListObj);
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
                <li id="position-${param.GetTask.length}">
                ${infoTask}
                <label>
                    <button>Edit </button>
                </label>
                </li>
            `
        }
        else{
            alert ("The Task you are trying add is empty");
        }
        document.getElementById("task").value='';
    });
}
