"use strict";

import { apiRest, emptyParentContainer, isEmpty, formatDate, getUser, truncateText } from '../../../src/js/helpers/helpers.js';

var classes = [];
var classesBySearch;

const searchBox = document.getElementById("inputSearchBox");
const searchButton = document.getElementById("searchButton");
const parentElement = document.getElementById("mainParent");
const alertsElement = document.getElementById("errors");

let spinner = document.getElementById("spinner");

function showErrorsSingled(errorMsg){
  alertsElement.innerHTML = `<div class="alert alert-danger" role="alert">${errorMsg} </div>`;
  spinner.style.display = "none";
}
async function getClassesBySearch(){
  try{
    const responseBySearch = await fetch(`${apiRest.url}?search=${searchBox.value}`);
    const dataManagableForUser = responseBySearch.json();
    if(responseBySearch.status === 200){
     await dataManagableForUser.then(
      data => classesBySearch = data
    )
    }else{
      let errorMessage = await dataManagableForUser;
      emptyParentContainer(parentElement)
      showErrorsSingled(errorMessage.message)
    }  
  } catch(error){
    showErrorsSingled(error);
  }
}
async function getClasses(){
  try {
    var response = await fetch(apiRest.url);

    var dataManageable = response.json();
  
    await dataManageable.then(
      data => classes.push(data)
    )
  } catch (error) {
    showErrorsSingled(error);
  }
  return classes;   
};

async function bindUI(){
    var classesInner = [];
      classesInner = await getClasses();
    classesInner[0].forEach((element)=>{
      var post = `
          <div class="row">
          <div class="col-md-12">
            <div class="card">
              <img class="card-img" src="../../../src/assets/img/backgroundClassHolder.jpg" alt="Card image">
              <div class="card-img-overlay">
                <div class="card-header lead" style="color: black;">
                  <strong>${element.title}</strong>
                </div>
                <div class="card-body" style="color: black;">
                <p class="card-text" style="color: black;"> <strong>Simulación</strong>: </p>
                  <p class="card-text" style="color: black;"> ${element.simulationName}</p>
                  <p class="card-text" style="color: black;"> <strong>Descripción</strong>: </p>
                  <p class="card-text" style="color: black;"> ${truncateText(element.description)}</p>
                  <p class="card-text" style="color: black;"> <strong>Profesor</strong>: </p>
                  <p class="card-text" style="color: black;"> ${element.teacherName}</p>
                  <p class="card-text" style="color: black;"> <strong>Vencimento</strong>: </p>
                  <p class="card-text" style="color: black;"> ${formatDate(element.expiration)}</p>
                  <hr>
                  <a href="../simulations/?${element._id}" class="btn btn-warning">Abrir Simulación</a>
                </div>
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
      </div> `;

      parentElement.insertAdjacentHTML("beforeend", post);
      spinner.style.display = "none";
    });
};

function bindUIForSearch(){
  classesBySearch.forEach((element)=>{
    
    var post = `
          <div class="row">
          <div class="col-md-12">
            <div class="card">
              <img class="card-img" src="../../../src/assets/img/backgroundClassHolder.jpg" alt="Card image">
              <div class="card-img-overlay">
                <div class="card-header" style="color: black;">
                  ${element.title}
                </div>
                <div class="card-body" style="color: black;">
                <p class="card-text" style="color: black;"> <strong>Simulación</strong>: </p>
                  <p class="card-text" style="color: black;"> ${element.simulationName}</p>
                  <p class="card-text" style="color: black;"> <strong>Descripción</strong>: </p>
                  <p class="card-text" style="color: black;"> ${truncateText(element.description)}</p>
                  <p class="card-text" style="color: black;"> <strong>Profesor</strong>: </p>
                  <p class="card-text" style="color: black;"> ${element.teacherName}</p>
                  <p class="card-text" style="color: black;"> <strong>Vencimento</strong>: </p>
                  <p class="card-text" style="color: black;"> ${formatDate(element.expiration)}</p>
                  <hr>
                  <a href="../simulations/?${element.id}" class="btn btn-warning">Abrir Simulación</a>
                </div>
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
      </div> `;
    parentElement.insertAdjacentHTML("beforeend", post);
    spinner.style.display = "none";
  });
}

document.load = bindUI();

if(getUser() != "maestro1"){
  let elementDisabled = document.getElementById('createClass');

  elementDisabled.style.display = "none";
}

document.getElementById("searchForm").addEventListener('submit', (e)=>{
  e.preventDefault();

})

document.getElementById("logout").addEventListener('click', ()=>{
  unlinkUser();
})
searchButton.addEventListener('click', async(e)=>{
     e.preventDefault();
    if(isEmpty(searchBox.value)){
      alert("Campo de busqueda esta vacio.")
    }else{
    alertsElement.style.display = "none";
    parentElement.textContent = "";
     await getClassesBySearch();
      bindUIForSearch();  
    }      
});