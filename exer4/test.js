// Importing functions from index.js for testing
import accountGenerator from './index.js'

// Successful appending
const sampleArray1 = ["Allan", "Turing", "aturing@w3c.com", 60];    

// Failed appending
const sampleArray2 = ["Tim", "tim@w3c.com", 25];
const sampleArray3 = ["", "Nelson", "ted.n@w3c.com", 43];
const sampleArray4 = ["Tim", "Berners-Lee", "timw3c.com", 25];
const sampleArray5 = ["Ted", "Nelson", "ted.n@w3c.com", 17];

// Successful appending
const sampleArray6 = ["Tim", "Berners-Lee", "tim@w3c.com", 25];
const sampleArray7 = ["Ted", "Nelson", "ted.n@w3c.com", 43];

// Calling of addAccount funtion to test the program
accountGenerator.addAccount(sampleArray1);
accountGenerator.addAccount(sampleArray2);
accountGenerator.addAccount(sampleArray3);
accountGenerator.addAccount(sampleArray4);
accountGenerator.addAccount(sampleArray5);
accountGenerator.addAccount(sampleArray6);
accountGenerator.addAccount(sampleArray7);

