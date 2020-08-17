import { apiRest, emptyParentContainer, isEmpty, formatDate } from '../../../src/js/helpers/helpers.js';
const simulationLink = window.location.search.slice(26);
const classId = window.location.search.slice(1, 25);
console.log(window.location.search)
const parentElement = document.getElementById("simulationContainer");

const simulationElement = `
<div class="embed-responsive embed-responsive-1by1">
<iframe class="embed-responsive-item" src="${simulationLink}" allowfullscreen></iframe>
</div>
`
parentElement.innerHTML = simulationElement;


async function getClassById(){

    const responseClassById = await fetch(`${apiRest.url}/${classId}`);

    const readableResponse = responseClassById.json();


    console.log(await readableResponse);
}
getClassById()
