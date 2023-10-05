const marvel = ["thor" , "ironman", "spiderman"]
const dc = ["superman" , "flash" , "batman"];
// marvel.push(dc);
// console.log(marvel);
const allheros =  marvel.concat(dc);
// console.log(allheros);

const arr = [...marvel , ...dc];
// console.log(arr);
const arr1 = [1,2,3,[4,5,6],[7,[8,9]],10,11];
const arr2 = arr1.flat(Infinity);
// console.log(arr1);
// console.log(arr2);

// console.log(Array.from("RahulRaniwal"));

console.log(Array.from({name: "Rahul"}));// interesting gives empty array
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3));