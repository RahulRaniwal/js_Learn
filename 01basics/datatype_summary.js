// Primitive    (call by value)
// string, number, boolean, null, undefined, symbol,Bigint, 

const id = Symbol('123')
const id1 = Symbol('123')
// they may look like they are same but they are not

// Non primitive (call by reference)
// Array, object, functions


const protagonist = ["Eren", "Gojo", "Naruto"]
let obj = {
    name: "Rahul",
    age: 22,
}

const fn = function(){
    console.log("Rahul");
}