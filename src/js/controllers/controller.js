'use strict';


(function setUsers(){
    const students = [
        {'user':"estudiante1", "password":12345},
        {'user':"estudiante2", "password":12345},
        {'user':"estudiante3", "password":12345},
        {'user':"estudiante4", "password":12345},
        {'user':"estudiante5", "password":12345},
        {'user':"estudiante6", "password":12345},
        {'user':"estudiante7", "password":12345},
        {'user':"estudiante8", "password":12345},
        {'user':"estudiante9", "password":12345},
        {'user':"estudiante10", "password":12345},
    ];
    const teachers = [ 
        {'user':"maestro1", "password":"maestro12345"},
    ]

    const users = [...students, ...teachers];
    
    localStorage.setItem('users', JSON.stringify(users));
})();

