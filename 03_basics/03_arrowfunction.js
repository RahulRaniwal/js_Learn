const user = {
    name: "Rahul",
    price: 100,
    welcomeMessage: function(){
        console.log(`${this.name} , welcome paaji`);
    }
}


// user.welcomeMessage()
// user.name = "Raniwal"
// user.welcomeMessage()

// console.log(this);  // will give empty object

// function chai(){
//     let user = "Rahul"
//     // console.log(this.user);
//     console.log(this);
// }
//  chai()

// const chai = function(){
//     let user = "Rahul"
//     console.log(this.user);
// }

// const chai = () =>{
//     let user = "Rahul"
//     console.log(this.user);
// }
// chai()

const add2 = (num1 , num2) =>{
    return num1 + num2
}
 const res = add2(3,4)
 console.log(res);

 // normal function me this use hota kyuki vo ek global object he but arrow function me this use nahi hota