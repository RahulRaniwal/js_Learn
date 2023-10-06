const tinderUser = new Object()
tinderUser.id = "123"
tinderUser.name = "Jordi"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const user = {
    email: "rahul@google.com",
    fullName: {
        userName: {
            fName: "Rahul",
            lName: "Raniwal"
        }
    }
}
// console.log(user.fullName.userName.fName);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
// const obj3 = Object.assign({} , obj1 , obj2)
// console.log(obj3);  // object asiign ki doc me mdn check

const obj3 = {...obj1 , ...obj2};   // same as array spread concept
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

const course = {
    coursename: "jsLear",
    price: "100",
    instructor: "Rahul"
}
// course.instructor
// anotehr way of accesing value of object

const {instructor} = course
const {instructor: inst} = course   // we can also giev it short name and use it
console.log(instructor);
// and this called object destructuring

 