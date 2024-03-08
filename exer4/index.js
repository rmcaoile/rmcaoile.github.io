import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

const generateUniqueID = (fname, lname) => {
    var fnameInitial = fname[0].toLowerCase();
    var lowercaseLname = lname.toLowerCase();
    var fullUuid = uuidv4();
    var idNum = "";

    for (let i=0; i<8; i++){
        idNum += fullUuid[i];
    }

    return(fnameInitial + lowercaseLname + idNum); 
  }

const addAccount = (array) => {
    if (array.length == 4) {
        console.log("All fields present");
        
        if (array[0] != "" && array[1] != "" && array[2] != "" ) {
            console.log("Non-empty strings"); 
            
            if (validator.isEmail(array[2])) {
                console.log("Valid email format");

                if (array[3] > 17) {
                    console.log("Age is at least 18");

                    try {
                        appendFileSync('users.txt', array[0]+", "+ array[1]+", "+array[2]+", "+array[3]+", "+generateUniqueID('Alan', 'Turing') +"\n");
                        console.log('APPENDING SUCCESS!\n');

                      } catch (err) {
                        console.log('APPENDING FAILED!\n');                      
                      }
                }
                else {
                    console.log("Age is below 18!");
                    console.log('APPENDING FAILED!\n'); 
                }
            }
            else {
                console.log("Invalid email format!"); 
                console.log('APPENDING FAILED!\n'); 
            }
        }
        else {
            console.log("Empty strings!");   
            console.log('APPENDING FAILED!\n'); 
        }            
    }
    else {
        console.log("Some fields missing!");
        console.log('APPENDING FAILED!\n'); 
    }
    

}

export default {generateUniqueID, addAccount}





// const sampleArray = ["Allan", "Turing", "aturing@w3c.com", 58];


// addAccount(sampleArray);

// generateUniqueID('Alan', 'Turing');
// console.log(addAccount(sampleArray))











// // const math = require('./math.js');
// // the import can be named anything

// import math from './math.js'
// import { snakeCase } from 'snake-case';

// console.log(math.add(5, 2)); // 7
// console.log(math.mul(5, 2)); // 10

// console.log(snakeCase('thisIsInCamelCase'));

// console.log(math.PI * (5 ** 2)); 
// console.log(math.obj.one + math.obj.two); // 2