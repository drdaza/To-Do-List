export function isEmpty(param){
    if(param==''){
        return true;
    }
    else{return false;}
}
export function extractPositionTask(param){
    param = param.split("-");
    param = param[2];
    return parseInt(param);

}