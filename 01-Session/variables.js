var global = "global";

// let creates a local variable in JavaScript & can be re-assigned. Initialization during the declaration of a let variable is optional. A let variable will contain undefined if nothing is assigned to it.
let local = "local";
// A constant variable can be declared using the keyword const. It must have an assignment. Any attempt of re-assigning a const variable will result in JavaScript runtime error.
const constant = "constant";

console.log(global); // global ->

console.log(local); // local ->

console.log(constant); // constant ->

global = "global2";

console.log(global); // global2 ->

local = "local2";

console.log(local); // local2 ->

constant = "constant2";

console.log(constant); // constant ->

// examples of variables
let name = "Tammy";
const found = false;
var age = 3;
console.log(name, found, age);
// Tammy, false, 3

// declarando variables
var age;
let weight;
const numberOfFingers = 20;


let service = 'credit card';
let month = 'May 30th'; 
let displayText = 'Your ' + service  + ' bill is due on ' +  month + '.';

console.log(displayText);
// Prints: Your credit card bill is due on May 30th.

// ------------------------------------------------------------ Que saldra al correr el archivo?
// ------------------------------------------------------------ Haz el cambio necesario para que corra correctamente .
// Declarar una variable con el nombre de una persona y asignarle un valor.
// Imprimir en consola el nombre de la persona junto con una string.


// ------------------------------------------------------------ Subir Archivo con cambios y ejercicio a su carpeta de github
