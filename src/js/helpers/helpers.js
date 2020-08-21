
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
    "url": "https://class-nestjs.herokuapp.com/class"
};

export function showErrors(errorMsg, elementID){
    let alertsElement = document.getElementById(`${elementID}`);
    alertsElement.innerHTML = `<div class="alert alert-warning" role="alert">${errorMsg}. </div>`;
  }

export function linkUser(user){
    return localStorage.setItem("loggedUser", user);
}

export function getUser(){
    return localStorage.getItem("loggedUser");
}

export function unlinkUser(){
    return localStorage.removeItem("loggedUser");
}
export const simulations = [{"info":["AdicciónDeVectores","https://phet.colorado.edu/sims/html/vector-addition/latest/vector-addition_es.html"]}, {"info":["AjustandolaCurva","https://phet.colorado.edu/sims/html/curve-fitting/latest/curve-fitting_es.html"]}, {"info":["CargasyCampos","https://phet.colorado.edu/sims/html/charges-and-fields/latest/charges-and-fields_es.html"]}, {"info":["BajoPresión","https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_es.html"]}, {"info":["ConstruyeunÁtomo","https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_es.html"]}, {"info":["Difusión","https://phet.colorado.edu/sims/html/diffusion/latest/diffusion_es.html"]}, {"info":["Travoltaje","https://phet.colorado.edu/sims/html/john-travoltage/latest/john-travoltage_es.html"]}, {"info":["FormasyCambiosdeEnergía","https://phet.colorado.edu/sims/html/energy-forms-and-changes/latest/energy-forms-and-changes_es.html"]}, {"info":["GravedadyÓrbitas","https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_es.html"]}, {"info":["LeydeCoulomb","https://phet.colorado.edu/sims/html/coulombs-law/latest/coulombs-law_es.html"]}]

export function emptyParentContainer(element){
    return element.innerHTML = ``;
}

export function formatDate(stringDate){
    let newDate = stringDate.slice(0,10);
    return newDate.split("-").reverse().join("-");
}

export function truncateText(text){
    const textTrucated = text.slice(0, 64);
    return `${textTrucated}...`
}