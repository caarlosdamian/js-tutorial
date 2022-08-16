/*Comparison operators are used to comparing two values and return true or false depending on the validity of the comparison:

=== strict equal
!== strict not equal
> greater than
>= greater than or equal
< less than
<= less than or equal*/

1 > 3       // false
3 > 1       // true
250 >= 250  // true
1 === 1     // true
1 === 2     // false
1 === '1'   // false


// The logical OR operator || checks two values and returns a boolean. If one or both values are truthy, it returns true. If both values are falsy, it returns false.


true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false


// The ternary operator allows for a compact syntax in the case of binary (choosing between two choices) decisions. It accepts a condition followed by a ? operator, and then two expressions separated by a :. If the condition evaluates to truthy, the first expression is executed, otherwise, the second expression is executed.

let price = 10.5;
let day = "Monday";

day === "Monday" ? price -= 1.5 : price += 1.5;


// An else block can be added to an if block or series of if-else if blocks. The else block will be executed only if the if condition fails.
const isTaskCompleted = false;

if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
}

// The logical AND operator && checks two values and returns a boolean. If both values are truthy, then it returns true. If one, or both, of the values is falsy, then it returns false.

true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true





// The logical NOT operator ! checks a value and returns a boolean. If the value is truthy, it returns false. If the value is falsy, it returns true.

!true;     // false
!false;   // true
!0;       // true
!1;       // false
!null;    // true
!NaN;     // true

//===========================================================Ejercicio de la clase
// Teniendo variables  A = 5, B = 3, C = -12  contestar que resultado arrojan las siguientes expresiones con operadores logicos.
let A =5 ;
let B =3 ;
let C =-12 ;
 A > 3  
 B < C 
 A < C
 C / B < A
 C / B == -4  
 3 && B > 3 && C < 3
 A * B == 15   //
 A > 3 && B >= 3 && C < -3 // 
a<3 ? 'a es menor que 3' : 'a es mayor que 3' // que imprime esta expresion?

