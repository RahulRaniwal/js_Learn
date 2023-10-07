// Immediately invoked function expression (IIFE)
// reason of using iife is that global scope se problem hoti he to uske pollutionko hataane ke liye we use iffe

(function chai(){
    console.log(`chai ready`);
})();

(() =>{
    console.log(`arrow fucntion`);
})();

((name) =>{
    console.log(`arrow fucntion ${name}`);
})("RAHUL");
// iife fucntion ko nahi pata ki rukna kab he so we have to use semicolon(;)