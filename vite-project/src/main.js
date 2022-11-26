import './sass/styles.scss'
import javascriptLogo from './assets/javascript.svg'
import { createList, eventClickAddTask } from './js/components/Events'


document.querySelector('#app').innerHTML = /* html */`
  <div>
    <h1>Task List!!!</h1>
    <div class="card">
      <label for="task"> Enter a new task: 
        <input type = "text"  id="task">
      </label>
      <button id="add-task" type="button">Add Task</button>
    </div>
    <div id="list-space">
      <ul id="list">
      </ul>
    </div>
  </div>
`

createList();

/* create a CRUD to do list
I need:
--CREATE
* obtain the info of the task that the user want create
* that the user confirm the info 
* access the info that the user has given 
* stack that info for it will show below
-- READ
* access to info stack
* print the infor in the screen
-- UPDATE
* access to information that was it stacking
* add new info that will remplace to the old info
* acces the new info
* save the new info 
* remplace the old info
*/