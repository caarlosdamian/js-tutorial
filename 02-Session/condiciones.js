/*The switch statements provide a means of checking an expression against multiple case clauses. If a case matches, the code inside that clause is executed.

The case clause should finish with a break keyword. If no case matches but a default clause is included, the code inside default will be executed.*/

const food = "salad";

switch (food) {
  case "oyster":
    console.log("The taste of the sea 🦪");
    break;
  case "pizza":
    console.log("A delicious pie 🍕");
    break;
  default:
    console.log("Enjoy your meal");
}

// Prints: Enjoy your meal

// An if statement accepts an expression with a set of parentheses:

// If the expression evaluates to a truthy value, then the code within its code body executes.
// If the expression evaluates to a falsy value, its code body will not execute.

const isMailSent = true;

if (isMailSent) {
  console.log("Mail sent to recipient");
}

// The logical NOT operator ! can be used to do one of the following:

// Invert a Boolean value.
// Invert the truthiness of non-Boolean values.

let lateToWork = true;
let oppositeValue = !lateToWork;

console.log(oppositeValue);
// Prints: false

//After an initial if block, else if blocks can each check an additional condition. An optional else block can be added after the else if block(s) to run by default if none of the conditionals evaluated to truthy.


// In JavaScript, values evaluate to true or false when evaluated as Booleans.

// Values that evaluate to true are known as truthy
// Values that evaluate to false are known as falsy
// Falsy values include false, 0, empty strings, null undefined, and NaN. All other values are truthy.

//======================================================================Exercises======================================================================
// 1. Write a program that checks if a number is even or odd.
// 2. Write a program that checks if a number is positive, negative, or zero.
// 3. Write a program that checks if a number is divisible by 5.
// 4. Write a program that checks if a number is divisible by both 5 and 7.
// Puedes usar las condiciones vistas en clase.