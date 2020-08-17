
export function isEmpty(value){
    if(value === "" || value == null || value === undefined || value === " "){
        return true;
    }else{
        return false;
    }
  }

export const utilConstants = {
    "NotLoggedIn" : false,
    "LoggedIn":true
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

export const apiRest = {
    "url": "http://localhost:3000/class"
};

export function showErrors(errorMsg, elementID){
    let alertsElement = document.getElementById(`${elementID}`);
    alertsElement.innerHTML = `<div class="alert alert-danger" role="alert">${errorMsg}. </div>`;
  }


export const simulations = [{"info":["AdicciónDeVectores","https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_es.html"]}]

export function emptyParentContainer(element){
    return element.innerHTML = ``;
}

export function formatDate(stringDate){
    let newDate = stringDate.slice(0,10);
    return newDate.split("-").reverse().join("-");
}