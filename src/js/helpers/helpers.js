// export const helperController = {
//
//     "isEmpty": function(value){
//         if(value === "" || value == null || value === undefined || value === " "){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

export function isEmpty(value){
    if(value === "" || value == null || value === undefined || value === " "){
        return true;
    }else{
        return false;
    }
  }

export const utilConstants = {
    "userStatusFlag" : false,
}

export function getAllStoraged() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

export function formattedDateAsID(){
    let idRandom = String(Math.random()).substring(2, 10);
    let idDate = new Date().toISOString().substring(0, 10).replace(/-/g, "");
    return idDate + idRandom;
}
