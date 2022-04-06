/**
 * 
 * @param {NodeList} target 
 * @param {Function} callback 
 */
function onClick(target,callback){
    var index = 0

    for(index;index<target.length;index++){

        target[index].addEventListener("click",callback)

    }
}


