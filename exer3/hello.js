// console.log("Hello World");
// console.log(typeof("some string"));
// console.log(typeof(24));

// console.log(Boolean("some string")); // returns true
// console.log(Boolean(2));  
// console.log(Boolean(0));  
// console.log(Boolean(""));  

// console.log(2**3); 

// console.log("name = 'koy'");  
// console.log('name = "koy"');  
// console.log('name = "koy"');  
// console.log("name = \"koy\"");  

// var x; // or let x;
// console.log(x);

// const person = {
//     name: 'Tim Berners-Lee',
//     age: 66,
//     gender: 'male',
//     interests: ['physics', 'web']
//   }
  
//   console.log(person)
  
//   const animal = {
//     "number-of-legs": 4,
//     "fur-color": 'brown'
//   }
  
//   console.log(animal["fur-color"])
  
//   animal.mammal = true    // adds new property 
//   delete animal.mammal    // removes a property

//   console.log(animal)

// const a = [1, 'two', 3.14, false, {s1:'this is', s2:'an object'}]

// console.log(a[2])   // prints 3.14


// function add(x, y) {
//     const result = x + y;
//     return result;
// }

// add(2, 5); // doesn't print anything
// console.log(add(2, 5));

// x = add(2, 5); // doesn't print anything
// console.log(x);

// const person = {
//     name: 'Tim Berners-Lee',
//     age: 64,
//     gender: 'male',
//     interests: ['physics', 'web'],
//     greeting: function() {
//         console.log("Hi, my name is " + this.name + " and my interests are " + this.interests[0] + " and " + this.interests[1])
//     }
//   }
  
//   person.greeting()
//   person["greeting"]()
// function isNumber(value) {
//     return typeof value === 'number';
//   }

// console.log(isNumber('42'));

// function reversePassword (password) {
//     var newPassword = '';

//     for (let i=0; i<password.length; i++) {
//         newPassword += password[password.length-i-1];
//     }
//     console.log(newPassword);
// }

// var x = "sheees";
// // console.log(x.length);
// reversePassword("tae");

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

x = "taeeeeee";
y = "taeeeeee";

console.log(validatePassword(x,y));
