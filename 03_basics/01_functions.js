function sayMyName(){
    console.log("Rahul");
}
// sayMyName();

// function add2(num1 , num2){
//     console.log(num2+num2);;
// }
function add2(num1 , num2){
    return (num1+num2);;
}
// add2(3,5)
const res = add2(3,4);
// console.log(res);

// function login(username){
//     if(username === undefined){
//         return `Naam Kitt he laadle?`;
//     }
//     return `${username} just logged in`
// }

function login(username = "Rahul"){ // we can also give the default value
    return `${username} just logged in`
}

const status = login("Raniwal")
const status1 = login();
// console.log(status);
// console.log(status1);

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,300));

const user = {
    name: "Rahul",
    age: "23"
}

function handdleObject(obj){
    console.log(`username is ${obj.name} and age is ${obj.age}`);
}
handdleObject(user);
// we can also pas object directly
const arr = [3,4,5,6,7,8,9]
function f1(array){
    return array[2];
}

console.log(f1(arr));
