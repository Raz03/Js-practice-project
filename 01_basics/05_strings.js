const name = "Razack"
const repoCount = 3

console.log(name + repoCount +" value")

console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new String('Raz-Gamer-007')

// console.log(gameName[7]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(3,7)
console.log(newString);


const anotherString = gameName.slice(-5,7)
console.log(anotherString);

const newString1 = "    Raz   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://www.razackabdul%20123.com"
console.log(url.replace('%20','#'));
console.log(url.includes('abdul'));
console.log(gameName.split('-'));






