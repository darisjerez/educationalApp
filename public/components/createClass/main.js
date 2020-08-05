"use strict";

import { isEmpty } from '../../../src/js/helpers/helpers.js';
import { classModel } from '../../../src/js/models/class.model.js';

const simulationLinks = [];
const inputClassName = document.getElementById("inputClassName");
const inputTeacherName = document.getElementById("inputTeacherName");
const inputDescription = document.getElementById("inputDescription");
const inputSimulation = document.getElementById("inputSimulationSelect");
const saveButton = document.getElementById("saveButton");

function saveIntoDB(data){
    localStorage.setItem('class', JSON.stringify(data));
}

function saveClass(){

        if (isEmpty(inputClassName.value) && isEmpty(inputTeacherName.value) && isEmpty(inputDescription.value)) {
            let alertsElement  = document.getElementById("alerts");
            alertsElement.innerHTML = `<div class="alert alert-danger" role="alert">Hay campos vacios!</div>`;
        } else {
            classModel.title = inputClassName.value;
            classModel.teacher = inputTeacherName.value;
            classModel.description = inputDescription.value;
            classModel.simulationLink = inputSimulation.value;
            simulationLinks.push(classModel);
            saveIntoDB(simulationLinks);
            console.log(localStorage.getItem('class'));
        }
    };


saveButton.addEventListener('click', ()=>{
    saveClass();
})