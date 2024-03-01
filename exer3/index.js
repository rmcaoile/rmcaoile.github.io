const user = {
    name: "",
    newPassword: ""
}


function validatePassword (password1, password2) {
    if (password1 == password2) {
        if ((password1.length >= 8) && (password2.length >= 8)) {
            // for (let i=0; i<password1.length; i++) {

            // }
            
            return true;
        }
        else {        
            return false;
        }
    }
    else {        
        return false;
    }
}


function reversePassword (password) {
    var newPassword = '';

    for (let i=0; i<password.length; i++) {
        newPassword += password[password.length-i-1];
    }
    return newPassword;
}


function storePassword (fname, password1, password2) {
    if (validatePassword(password1, password2) == true) {
        user.name = fname;
        user.newPassword = reversePassword (password1);
    }
    else {
        user.name = fname;
        user.newPassword = password1;
    }

    console.log(user);
}


storePassword("John", "Pass1234", "Pass1234");
storePassword("John", "Pass123", "Pass12345");