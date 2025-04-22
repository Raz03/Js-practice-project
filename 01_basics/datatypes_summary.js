// Datatypes 2 categories- Primitive & non-primitive

// primitive 7 types - String,Number, Boolean, null, undefined, Symbol & BigInt

const score = 1000
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userGmail; //or
let usermail = undefined

const id = Symbol('123');
const anotherID = Symbol('123');

//console.log(id === anotherID);

const bigNumber = 45435435475439n

// reference (non-primitive)

// Array, Objects, Functions

const apps = ["whatsapp","instagram","youtube" ];
let myObj = {
    name: "Razack",
    age: 28,

}

const myFunction= function(){
    console.log("Hello Razack");
}

console.log(typeof myFunction);
