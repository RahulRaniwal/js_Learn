// singleton

// objects
// Object.creat  // ese bhi banta he 

const sym = Symbol("key1")
const user = {
    name: "Rahul",
    [sym]: "mykey1",
    age: 23,
    location: "Delhi",
    email: "rahul.google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon" , "Tue"]
}
// 2 ways to acces object value 
// Dot notation and square notation
// console.log(user.name);
// console.log(user["name"]);
// console.log(user.sym);  // check typeof this symbol
// console.log(user[sym]);

user.name = "Raniwal" 
// console.log(user.name);
// Object.freeze(user);
user.name = "Rahul"
// console.log(user);

user.greeting = function(){
    console.log("Haanji veere kidda pher");
}
user.greeting1 = function(){
    console.log(`Haanji veere ${this.name} kidda pher`);
}
console.log(user.greeting);
console.log(user.greeting());
console.log(user.greeting1);
console.log(user.greeting1());