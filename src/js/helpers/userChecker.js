"use strict";


const user = localStorage.getItem("loggedUser");

if(user !== "maestro1"){
    alert("Opps no estas autorizado en este lugar. Te llevaremos al lugar correcto.");
    window.location.replace("../../../public/components/board/");
}