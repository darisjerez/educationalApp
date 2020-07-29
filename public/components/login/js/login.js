
'use strict';

import { helperController } from "../../../../src/js/helpers/helpers.js";


const inptUsername = document.getElementById("inputUsername").value;
const inputPassword = document.getElementById("inputPassword").value;
const submitBtn = document.getElementById("loginBtn");



const loginController = {

    "getUsers": function(){
        const users = JSON.parse(localStorage.getItem('users'));
        return users;
    },
    "logIn":function(username, password){
        const users = [...this.getUsers()];   
        if (helperController.isEmpty(username) || helperController.isEmpty(password)) {
            alert("Credenciales invalidas, por favor intente una vez mas.");
            this.loggedIn(false);
        }else{
           if (users.map(student=> student.user === username && student.password === pasword).length > 0) {
               window.location.href("");
               this.loggedIn(true);

           } else{
                alert("Credenciales invalidas, por favor intente una vez mas.");
                this.loggedIn(false);
           }
        }
        
    },
    "loggedIn": function(status){
        if (status === true) {
            console.log("LOGGEDIN");
            return "LOGGEDIN";
        }else{
            console.log("NOTLOGGEDIN");
            return "NOTLOGGEDIN";
        }
    }

}

submitBtn.addEventListener('click', function(){
    console.log([inptUsername, inputPassword])

    loginController.logIn(inptUsername, inputPassword);
})



