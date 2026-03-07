// Variables and Declarations

// Hoisting:::::
    // Js main code run hone sain pehle hii memeory lee leta hain aur by default sabhi declarations upar chala jata hain, ese hoisting kehte hain. Hoisting main var variables koo undefined value assign hoo jata hain aur let and const main assign nehi hota aur early access karne pain referenceError deta hain
console.log(x); // undefined
console.log(y); // reference error
console.log(z); // reference error
var x = 0;
let y = 0;
const z = 0;

// Var keywords:::::
    // It's old and risky, it's function scoped can be redeclared and reassigned and hoisted to the top with undefined values
var x = 5; // no error

// Let keyword:::::::
    // It's modern and safe, it's block scoped, can be reassigned but cannot be redeclared, hoisted but stays in the temporal dead zone
let a = 5;
a = 8 // no error
//let a = 8; // error

// Const Keyword:::::
    // Constant values, it's block scoped, cannot be dedeclared or reassigned, hoisted but stays in TDZ, value must be assigned during declaration, array's or object's content can be changed
const aa = 5;
//aa = 8; // error
//const aa = 8; // error
const aaa = {name: "Mahi"};
aaa.name = "Iham"; // no error

// Scopes::::::
    // Function scope => inside function, Block scope => inside {} like loops, conditionals, var ignores block scopes and let and const follows block scope
{
    var xx = 2; 
    let xy = 2; 
    const xz = 2; // reference error
}
console.log(xx); // no error
console.log(xy); // reference error
console.log(xz); // reference error

// Use const by default, let when the value needs to be reassigned, never use var

// Practice Zone:::::::
    // Problem 3::::
    console.log(count);
    var count = 3;
    // Problem 4:::::
    const obj = {name: "mahi"};
    obj.age = 25;
    console.log(obj);
    // Problem 6:::::
    const arr = ["mahi"];
    arr[1] = "iham";
    console.log(arr);