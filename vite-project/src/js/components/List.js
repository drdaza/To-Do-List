export default class List{
    #Tasks;
    constructor(){
        this.#Tasks = new Array();
    }
    
    set (param){
        this.#Tasks.push(param);
    }
    get GetTask(){
        return this.#Tasks
    }
}
