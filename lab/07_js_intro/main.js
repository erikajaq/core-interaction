console.log("hello world!");
console.log('');

//STRINGS
console.log("STRINGS -");
console.log(":-p + :-)");

console.log("");

//NUMBERS
console.log("NUMBERS_");
console.log(8);
console.log(8 + 8);
console.log(8 - 8);
console.log(8 * 8);
console.log(8 / 8);
console.log(8 % 3);

console.log("");

//STRINGS & NUMBERS
console.log("STRINGS & NUMBERS-");

console.log("8 * 8" + 8 );
console.log("I am" + (8 * 8) + 'years old');
console.log("8 * 8",8 * 8);

console.log("")
//BOOLEANS
console.log("BOOLEANS BITCH-");
console.log(true,false);
      //comparing two thngs to get a BOOLEANS
console.log(3 < 4); //you get 'true' because 3 IS less than 4
console.log("")
console.log(2>1 && 2<12);//&& means both have to be true in order to return true
console.log(5>12 || 6<=18); // OR statement

console.log("")
// THREE BASIC TYPES
console.log("BASIC TYPES-");
console.log(typeof "hello");
console.log(typeof (8-7));
console.log(typeof (2 > 1));

console.log("");
//VARIABLES
console.log("VARIABLES-");
var five = 5;
console.log('five', five);
var ten = 10;
console.log(five + ten);
console.log('five + ten', five + ten);
console.log('five * ten', five * ten);

console.log('')

//ALTERING VARIABLES
console.log('ALTERING VARIABLES_');

var myStudentDebt = 800;
console.log("myStudentDebt", myStudentDebt);
myStudentDebt = myStudentDebt - 100;
console.log('myStudentDebt', myStudentDebt);
myStudentDebt -= 100;

console.log('')

// ARRAYS
console.log('ARRAYS-')
var myLuckyNumbers = [3,7,8,14,21];
console.log ('myLuckyNumbers:', myLuckyNumbers);
console.log(myLuckyNumbers [0]);

console.log("")

//OBJECTS
console.log("OBJECTS-");

var me = {
  name: 'Erika',
  age: 21,
  fromLosAngeles: true
} ;
console.log('me', me);
console.log(me['name']);
console.log("me['name']:", me['name']); //bracket notation
console.log('me.name:', me.name); //dot notation
// theyre typically the same thing, yield the same results
console.log("");

// FUNCTIONS
console.log("FUNCTIONS-");

var sayHi = function() { //naming the var sayHi so you can call sayHi when you want this certain function to occur
  console.log('hi')
};
sayHi(); //how you reference sayHi, the reference you defined


console.log('');
// ARGUMENTS

var saySomeMessage = function(message) {
  console.log(message);}
  console.log("saySomeMessage('hello'):");
  saySomeMessage("hello");
  saySomeMessage("bye bitch");

 var addNumbers = function(num1, num2) {
   return num1 + num2
 };

 var whoAmI = function( ) {

var me = {
name: 'Erika',
age: 21,
fromLosAngeles: true
} ;
console.log('me', me);
};

var squareThatGirl = function (){
  {console.log(8)};
  {console.log(8*8)}; }
