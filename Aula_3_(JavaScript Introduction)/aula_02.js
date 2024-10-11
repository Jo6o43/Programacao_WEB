////////////////////////////////////
// Linking a JavaScript File
// let js = "amazing";

// console.log("js value:", js);
// console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonasMatilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob)

////////////////////////////////////
// Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// console.log("----------------");
// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

////////////////////////////////////
// let, const and var
// let age = 30;
// age = 31;
// console.log("age", age);
// const birthYear = 1991;
// // birthYear = 1990;
// const job = "Eva";

// let x = 2;
// let y = 7;
// const soma = x + y;
// console.log(soma);

// // var job = "programmer";
// // job = "teacher";

// lastName = "Schmedtmann";
// console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);
/*
////////////////////////////////////
// Operator Precedence
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018)

let x, y
x = y = 25 - 10 - 5 // x = y = 10, x = 10
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge)

*/
////////////////////////////////////
// Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String multiple
// lines`);

////////////////////////////////////
// Taking Decisions: if / else Statements
/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

/*

////////////////////////////////////
// Type Conversion and Coercion

*/
// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" > "18");

// let n = "1" + 1;
// console.log(n);
// n = n - 1;
// console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }
/*
////////////////////////////////////
// Equality Operators: == vs. ===

const age = "18";

if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");
/*
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

/*
////////////////////////////////////
// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
*/
// const age = 17;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// EX: 1

/*
introduz também algumas palavras reservadas: interface, private, if (dá erro)

o erro está no nome da variável dentro do if. Supostamente achamos que 
hasdriver license vai passar a true. Mas não passa e nada nos dizem.


*/

"use strict";

// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) {
//   hasDriverLicense = true;
// }
// if (hasDriversLicense) console.log("I can drive");

// function logger que só vai ser executado quando a chamarmos
// function logger() {
//   console.log("o meu nome é Eva");
// }

// logger();

/*

Function Declaration:

Defined using the function keyword, followed by the function name, a set of parentheses that can include parameters, 
and a set of curly braces that contain the code to be executed.
Hoisted to the top of their scope, meaning they can be called before they are defined in the code.
The function name is mandatory.

Function Expression:

Defined using a variable assignment operator (=) followed by the function keyword, the function name (optional), 
a set of parentheses that can include parameters, and a set of curly braces that contain the code to be executed.
Not hoisted to the top of their scope, meaning they must be defined before they are called in the code.
The function name is optional.

Arrow Function:

A shorthand way of writing a function expression using the => syntax.
Do not have their own this, arguments, super, or new.target keywords.
Cannot be used as constructors or generators.
The function name is optional.
Here's an example of each type of function:

Function Declaration:

*/
// function addDeclaration(x, y) {
//   return x + y;
// }

//Function Expression:

// let addExpression = function (x, y) {
//   // return console.log(x + y);
//   return x + y;
// };

//Arrow Function:

// let addArrowFunction = (x, y) => x + y;

// //console.log(addDeclaration(1, 1));
// addDeclaration(1, 1);
// addExpression(5, 5);
// addArrowFunction(10, 10);

////////////////////////////////////

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// fruitProcessor(3, 6);

// console.log(fruitProcessor(3, 0));

// const appleJuice = fruitProcessor(3, 0);
// console.log(appleJuice);

/////////////////////////////////

// FUNCTIONS DECLARATIONS

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// calcAge1(1997);
// let age1 = calcAge1(1998);

// // FUNCTIONS EXPRESSIONS
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// const age2 = calcAge2(1998);
// console.log("age2 - ", age2);

// // principal diferença entre elas?
// // o hoisting da function declaration que permite chamar a função antes de ser declarada
// // mas não é boa pratica

// console.log("calcAge3 - ", calcAge3(1997));

// function calcAge3(birthYear) {
//   return 2022 - birthYear;
// }

// qual usar? O que se prefere.

/////////////////////////
// ARROW Functions

// surgem no ES5 e é uma forma mais simples de escrever funções
// mas tem algumas especificades

// (birthYear) => 2022 - birthYear;

// como podemos usa-la se não tem nome?
// não podemos chama-la assim mas podemos criar uma variavel,
// continua a ser uma function expression, isto é retorna um valor de forma implicita e não explicitamente como um return

// const calcAge5 = (birthYear) => 2022 - birthYear;

// const age5 = calcAge5(1975);

// console.log(age5);

// função anonima com mais linhas

// const yearUntilRetirment = (birthYear) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearUntilRetirment(1975));

// se tivermos muitos parametros:

// const yearUntilRetirment2 = (birthYear, name) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${name} retires in ${retirement}`;
// };

// console.log(yearUntilRetirment2(1975, "Eva"));

// O FUNCIONAMENTO DO THIS

// function Person() {
//   this.age = 30;

//   // Usando function normal:
//   setTimeout(function () {
//     console.log(this.age); // undefined (this não se refere ao objeto Person)
//   }, 1000);

//   // Usando arrow function:
//   setTimeout(() => {
//     console.log(this.age); // 30 (this é herdado do contexto do objeto Person)
//   }, 1000);
// }

// const person = new Person();

// FUNCTIONS CALLING OTHER FUNCTIONS
// consideremos novamente esta maquina de fazer sumos,
// mas consideremos que só conseguimos fazer sumos se tivermos
// poucas peças.

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(3, 5));

// Arrays e objectos
// const evaA = [
//   'Eva',
//   'Oliveira',
//   '47',
//   'teacher',
//   ['Andrea', 'Marta', 'Sandra'],
// ];

// para acedermos a um elemento - zero based
// console.log('primeiro elemento', evaA[0]);
//aceder ao seu tamanho - not zero based
// console.log('tamanho do array', evaA.length);

// const eva = {
//   firstName: "Eva",
//   lastName: "Oliveira",
//   age: "49",
//   job: "teacher",
//   friends: ["Andrea", "Marta", "Sandra"],
// };

// DOT NOTATION
// console.log(eva.firstName);

// [] NOTATION
// console.log(eva['lastName']);

// DOT NOTATION TO ADD PROPERTIES DO THE OBJECT
//permite o uso de expressoes
// eva.location = "Portugal";
// eva["twitter"] = "@mrseoliveira";

// console.log(eva);

// const nameKey = "Name";

// console.log(eva["first" + nameKey] + " " + eva["last" + nameKey]); //primeiro executa o nome que está dentro e depois vai ao objecto

// OBJECTS METHODS
//primeiro usamos uma function expression para criarmos um método no objeto

// const evaB = {
//   firstName: "Eva",
//   lastName: "Oliveira",
//   birthYear: 1975,
//   job: "teacher",
//   friends: ["Andrea", "Marta", "Sandra"],
//   hasDriverLicense: true,
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(evaB.calcAge(1975)); //aceder via .
// console.log(evaB["calcAge"](1975)); //aceder via []

// const evaC = {
//   firstName: "Eva",
//   lastName: "Oliveira",
//   birthYear: 1975,
//   job: "teacher",
//   friends: ["Andrea", "Marta", "Sandra"],
//   hasDriverLicense: true,
//   calcAge: function () {
//     // console.log(this);
//     return 2022 - this.birthYear;
//   },
// };

// console.log(evaC.calcAge());

// HIGH ORDER FUNCTIONS: A higher order function is a function that takes a function as an argument, or returns a function.

// let numbers = [1, 2, 3, 4, 5];

// let doubledNumbers = numbers.map(function (num) {
//   return num * 2;
// });

// console.log(doubledNumbers);

// let numbers = [1, 2, 3, 4, 5];

// let evenNumbers = numbers.filter(function (num) {
//   return num % 2 === 0;
// });

// console.log(evenNumbers);

// In this example, the filter() method takes a function that tests if
// each element of the numbers array is even and returns a new array with
// only the even numbers.

//////////////////////////////////////////

// let person = {
//   name: "John",
//   age: 30,
// };

// function sayHi() {
//   console.log(
//     "Hi, my name is " + this.name + " and I'm " + this.age + " years old."
//   );
// }

// let sayHiToJohn = sayHi.bind(person);

// sayHiToJohn();
// The bind() method is a higher-order function that returns a new function
// with a specific this value and arguments that are passed to it. Here's an example:
