"use strict";
import { getAllStoraged } from '../../../src/js/helpers/helpers.js';


function getClasses(){
   
    const classes = JSON.parse(getAllStoraged());

    return [ classes ];
};

(function bindUI(){
    const parentElement = document.getElementById("mainParent");
    const classes = getClasses();
    console.log(classes);

    classes.forEach(function(element){
        parentElement.innerHTML = `
        <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              ${element.title}
            </div>
            <div class="card-body">
              <h5 class="card-title">${element.teacher}</h5>
              <p class="card-text">${element.description}</p>
              <a href=${element.simulationLink} class="btn btn-primary">Abrir Simulación</a>
            </div>
          </div>
        </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <br>
        <hr style="background-color: aliceblue;">
        <br>
      </div>
    </div>
        `;
    });
    
})();