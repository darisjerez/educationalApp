"use strict";

//check student
if(!localStorage.getItem("loggedUser")){
    alert("No estas autorizado. No te preocupes te llevaremos al lugar correcto.")
    window.location.replace("../../../public/components/login/");
}

