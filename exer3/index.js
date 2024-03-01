// Defining an object to store user data
const user = {          
    name: "",           
    newPassword: ""
}

// Function to validate passwords
function validatePassword (password1, password2) {          
    if (password1 == password2) {           // checking if passwords match
        if (password1.length >= 8) {        // checking if password length is at least 8 characters
            let hasNumber = false;
            let hasUpper = false;
            let hasLower = false;

            for (let i = 0; i < password1.length; i++) {    // iterating over characters in password
                const char = password1[i];                  // accessing each character
                if (!isNaN(parseInt(char))) {               // checking if the character is a number
                    hasNumber = true;
                } else if (char === char.toUpperCase()) {   // checking if the character is uppercase
                    hasUpper = true;
                } else if (char === char.toLowerCase()) {   // checking if the character is lowercase
                    hasLower = true;
                }
            }

            if (hasNumber && hasUpper && hasLower) {        // checking if password meets all criteria
                return true;                                // returning true if password is valid
            }
            else {
                return false;   // returning false if password is invalid
            }            
        }
        else {        
            return false;       // returning false if password length is less than 8 characters
        }
    }
    else {        
        return false;           // returning false if passwords do not match
    }
}

// Function to reverse a password
function reversePassword (password) {
    var newPassword = '';   // initializing variable to store reversed password

    for (let i=0; i<password.length; i++) {
        newPassword += password[password.length-i-1];       // constructing reversed password
    }
    return newPassword;     // returning reversed password
}

// Function to store user password
function storePassword (fname, password1, password2) {
    if (validatePassword(password1, password2) == true) {   // checking if password is valid
        user.name = fname;                                  // setting user's name
        user.newPassword = reversePassword (password1);     // storing reversed password
    }
    else {
        user.name = fname;
        user.newPassword = password1;       // storing original password
    }

    console.log(user);      // logging user data
}


storePassword("John", "Pass1234", "Pass1234");
storePassword("John", "Pass123", "Pass12345");