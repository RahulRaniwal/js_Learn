const name = "Rahul"
const gpa = 9;

// console.log(name + gpa + " fake");

// modern days way to write this
// called string interpolation
// console.log(`This is ${name} and my gpa is ${gpa}`);

// another way of declaring string
const fullName = new String("Rahul-Raniwal-dev-coder");

// console.log(fullName[1]);
// console.log(fullName.__proto__); // gives object check in browser console

// console.log(fullName.length);
// console.log(fullName.toUpperCase());

// console.log(fullName.charAt(5));
// console.log(fullName.indexOf('R'));

// substring , slice , trim , replace
const str = fullName.slice(5,8);
const str1 = fullName.substring(0,8);
// console.log(str);
// console.log(str1);

const newStr = "         Rahul   "
// console.log(newStr);
// console.log(newStr.trim());

const url = "https://rahul.com/rahul%20raniwal"
// console.log((url));
// console.log(url.replace('%20' , '+'));
// console.log(url.includes('rudru'));

console.log(fullName.split('-'));