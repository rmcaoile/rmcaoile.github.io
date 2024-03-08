// Importing necessary packages
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

// Function that generates UniqueID
const generateUniqueID = (fname, lname) => {
    var fnameInitial = fname[0].toLowerCase();      // Getting the first character of fname then converting it to lowercase
    var lowercaseLname = lname.toLowerCase();       // Converting lname to lowercase
    var fullUuid = uuidv4();                        // Generating original uuid
    var idNum = "";                                 // Variable to store 8 character uuid

    // Loop to get 8 character uuid
    for (let i=0; i<8; i++){
        idNum += fullUuid[i];
    }

    // Returning the generated unique id
    return(fnameInitial + lowercaseLname + idNum); 
  }

// Function that add account to user.txt
const addAccount = (array) => {
    if (array.length == 4) {        // Check if all fields are present
        console.log("All fields present");
        
        if (array[0] != "" && array[1] != "" && array[2] != "" ) {      // Check if the first name, last name, and email are non-empty strings
            console.log("Non-empty strings"); 
            
            if (validator.isEmail(array[2])) {      // Check if the email is in a valid format 
                console.log("Valid email format");

                if (array[3] > 17) {
                    console.log("Age is at least 18");      // Check if age is at least 18

                    try {
                        appendFileSync('users.txt', array[0]+", "+ array[1]+", "+array[2]+", "+array[3]+", "+generateUniqueID(array[0], array[1]) +"\n");     // Appending the data to users.txt
                        console.log('APPENDING SUCCESS!\n');

                      } catch (err) {       // Error catcher
                        console.log('APPENDING FAILED!\n');                      
                      }
                }
                else {
                    // Prompt if Age is below 18
                    console.log("Age is below 18!");        
                    console.log('APPENDING FAILED!\n'); 
                }
            }
            else {
                // Prompt if Invalid email format
                console.log("Invalid email format!"); 
                console.log('APPENDING FAILED!\n'); 
            }
        }
        else {
            // Prompt if theres an Empty strings
            console.log("Empty strings exist!");   
            console.log('APPENDING FAILED!\n'); 
        }            
    }
    else {
        // Prompt if Some fields are missing
        console.log("Some fields are missing!");
        console.log('APPENDING FAILED!\n'); 
    }
    

}

// Export the functions generateUniqueID and addAccount
export default {generateUniqueID, addAccount}

