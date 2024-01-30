Installation 
npm install typescript --save-dev 
or
npx tsc

typescript is statically typedd superset of JavaScript that compiles to plain js.
it provides optional static typing, which enables better tooling andd helps catch errors at compile time.
this makes our code more scalable &reliable & we can check that our code runs properly before runtime.

Declaring varaiables
Typescript follows same rules as js for variable declarations. varaiables can be declared using var,let,const.
var: Older variable declaration keyword in JavaScript.     
let: Introduces block-scoping and declares an immutable variable.
const: Declares an immutable variable & preferred for most cases in TypeScript 

Var
var declares a variable with function
scope or global scope.
Hoisting: Variables declared with var are moved to the top of their scope during the compilation phase.
Example:
console.log(name); // Output: undefined
var name = "Ritik";

let 
The let declarations follow the same
syntax as var declarations.
let introduces block-scoping to variables
Example

if (true){
let count = 10;
console.log(count); // Output: 10
}
console.log(count); // Error: count is not
// defined

let name = "Ritik";
let typedName: string = "Ritik";
// with Type annotations (not necessary)

benefits of let 

Avoids variable hoisting: Variables declared with let are not hoisted
Provides better scoping: Variables are confined to the block where they are
declared
Enhances code readability and maintainability


Choosing B/W let/var
let is preferable over var.
let is block-scoped let variables cannot be
read or written to before they are
declared.
let variables cannot be re-declared.

const 

const declares an immutable variable that cannot be reassigned.
Immutable variables are useful for constants or values that should not be changed
Example:
const PI = 3.14;
PI = 3.14159; // Error: Cannot assign to 'PI'
// because it is a constant

Benefits of const 

Ensures immutability: Prevents accidental reassignment of values.
Improves code robustness: Immutable variables can't be modified, reducing potential bugs.
Expresses intent: Indicates that a variable's value should not change.

Differences B/W let and const

let allows variable reassignment, while const does not.
let can be declared without an initial value, but const requires initialization.
Example:
let count: number;
count = 10; // Valid
const PI: number; // Error: Const declarations
// must be initialized


Choosing B/W let and const
Use let when the value needs to change over time.
Use const for values that should remain constant
It is advisable to use const in typescript as it helps improve code clarity and prevents accidental modifications.

Considerations for const
const does not make objects or arrays immutable, only their assignment.
Properties of a const object can be modified.
Example:
const person = { name: "Alice"
, age: 30 };
person.age = 31; // Valid
person = { name: "Bob"
, age: 40 }; // Error:
// Cannot assign to 'person' because it is a
// constant


















