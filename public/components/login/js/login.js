
import { isEmpty } from "../../../../src/js/helpers/helpers.js";

const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");

const submitBtn = document.getElementById("loginBtn");



 const loginController = {

    "getUsers": function(){
        const users = JSON.parse(localStorage.getItem('users'));
        return users;
    },
    "logIn":function(username, password){
        const users = [...this.getUsers()];
        if (isEmpty(username.value) || isEmpty(password.value)) {
            alert("Credenciales invalidas, por favor intente una vez mas.");
        }else{
           if (users.some(student => student.user === username.value) && users.some(student => student.password === Number(password.value))) {
               window.location.replace("../board/index.html");
           } else{
                alert("Credenciales invalidas, por favor intente una vez mas.");
           }
        }

    },

}

submitBtn.addEventListener('click', function(){
    loginController.logIn(inputUsername, inputPassword);
})
