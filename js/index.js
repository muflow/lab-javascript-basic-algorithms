// Iteration 1: Names and Input
let hacker1 = 'Nenno';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Rose';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops


//3.1 U P P E R C A S E soluzione più vicina
let space = '';
for (let i=0; i<hacker1.length; i++) {
  space = space + hacker1[i] + ' ';
      
}
console.log(space.toUpperCase());


//3.2 reverse
let revez = '';
for (let i=0; i<hacker2.length; i++) {
  
  revez = hacker2[i] + revez;
  // x = y + x te devuelve la string al revez! Eureka?
}
console.log(revez);


//3.3 Lexicographic order

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely');
} else {
  console.log(' What?! You both have the same name?');
}



// Bonus 1

/*
let lorem = "Lorem ipsum dolor sit  et amet, consectetur  et adipiscing elit, sed et do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
*/

let lorem = "da et et et";

// number of words in teh string
 console.log('El numero de palabra en el texto es:' + " " + lorem.split(' ').length);


// number of times the latin word 'et' apperas (aquí solo he conseguido sacar 'et')

let loremArray = lorem.split(' ');

loremArray.forEach(function(word){ 
  if (word === 'et')
  console.log(`${word}`);
});




// Bonus 2 .....work in progress.....

let phraseToCheck = 'romamor';

let array = phraseToCheck.split("");


for (let i=0; i<array.length; i++) {
   if (array[i] !== array[array.length-i-1]) {
     console.log('no pali');
     
   } else {
console.log('pali');
   }

break;

}




