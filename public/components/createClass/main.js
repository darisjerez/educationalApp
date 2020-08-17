"use strict";

import { isEmpty, apiRest, showErrors, simulations } from '../../../src/js/helpers/helpers.js';
import { classModel } from '../../../src/js/models/class.model.js';

const inputClassName = document.getElementById("inputClassName");
const inputTeacherName = document.getElementById("inputTeacherName");
const inputDescription = document.getElementById("inputDescription");
const inputSimulation = document.getElementById("inputSimulationSelect");
const inputExpirationDate = document.getElementById("inputExpirationDate");
const saveButton = document.getElementById("saveButton");

async function saveIntoDB(data){
    try {
        var ClassResponseForPOST = await fetch(apiRest.url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        })
        if(ClassResponseForPOST.ok){
            console.log(ClassResponseForPOST.status)
            window.location.replace("../board/index.html");
        }else{
            showErrors(`${ClassResponseForPOST.statusText}, intente otra vez con campos válidos`, "alerts");
        }
    } catch (error) {
        showErrors(error, "alerts");
    }
}

function simulationIdentifier(){
    let formattedSimulationName = inputSimulation.value.replace(/ /g, "");
    if(simulations.filter(simulations=> simulations.info[0] === formattedSimulationName).length > 0){
        return simulations.filter(simulations => simulations.info[0] === formattedSimulationName)[0].info[1];
    }
}
function saveClass(){
        if (isEmpty(inputClassName.value) && isEmpty(inputTeacherName.value) && isEmpty(inputDescription.value)) {
            let alertsElement = document.getElementById("alerts");
            alertsElement.innerHTML = `<div class="alert alert-danger" role="alert">Hay campos vacios!</div>`;
        } else {
            classModel.title = inputClassName.value;
            classModel.description = inputDescription.value;
            classModel.teacherName = inputTeacherName.value;
            classModel.simulationName = inputSimulation.value;
            classModel.simulationLink = simulationIdentifier();
            classModel.expiration = inputExpirationDate.value;
            classModel.creation = new Date().toISOString();
            saveIntoDB(classModel);
        }
    };


saveButton.addEventListener('click', ()=>{
    saveClass();
})