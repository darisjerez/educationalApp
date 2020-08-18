import { apiRest, showErrors, unlinkUser } from '../../../src/js/helpers/helpers.js';

const classId = window.location.search.slice(1, 25);
const parentElement = document.getElementById("simulationContainer");
const logoutLink = document.getElementById("logout");

function createSimulationElement(simulationLink){
    const simulationElement = `
        <div class="embed-responsive embed-responsive-1by1">
            <iframe class="embed-responsive-item" src="${simulationLink}" allowfullscreen></iframe>
        </div>
            `;
    parentElement.innerHTML = simulationElement;

}

function addTeacherInfo(teacherEmail, classDescription){
    const containerElement = document.getElementById('list-profile');
    containerElement.innerHTML = `<p class="lead">Correo: ${teacherEmail} </p><br><p class="lead">Descripción:</p><br><p class="">${classDescription} </p>`
}

(async function getClassById(){

        try {
            const responseClassById = await fetch(`${apiRest.url}/${classId}`);

            const cleanClassData = await responseClassById.json();
            
            createSimulationElement(cleanClassData.simulationLink);
            addTeacherInfo(cleanClassData.teacherEmail, cleanClassData.description);
        } catch (error) {
            let fullError = `${error}, por favor refresque la pagina.`
            showErrors(fullError, "errors");
        }
})();

logoutLink.addEventListener('click', ()=>{
    unlinkUser();
})




