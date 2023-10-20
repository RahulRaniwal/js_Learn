// const promiseOne = new Promise(function(resolve , reject){
//     // Do an aysnc task
//     // DB calls , cryptography , network
//     setTimeout(function(){
//         console.log('Async task done');
//         resolve()
//     }, 1000)
// })

// // consume promise
// promiseOne.then(function(){
//     console.log(('Promise consumed'));
// })

/************** second way **********************/

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('Async task2 done');
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log('Async 2 resolved');
// })

const promiseThree = new Promise(function(resolve , reject){
     setTimeout(function(){
        resolve({username: "Raniwal" , email: "rn@gmail.com"})
     },1000)
})

promiseThree.then(function(user){
    console.log(user);
})
 
// promise 4
const promiseFour = new Promise(function(resolve , reject){
    setInterval(function(){
        let err = 0;
        if(!err){
            resolve({username: "Rahul", password: "1234"})
        }else{
            reject('Error he bhai')
        }
    }, 1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally(() => console.log(("promise either resolved or rejected"))) 

// promise 5
// const promiseFive = new Promise(function(resolve , reject){
//     setInterval(function(){
//         let err = 0;
//         if(!err){
//             resolve({username: "Raniwal", password: "123456"})
//         }else{
//             reject('Raniwal error he')
//         }
//     }, 1000)
// });

// // new way by using async await

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log((data));
//     } catch (error) {
//         console.log("E:" , error);
//     }
// }


//getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((err) => console.log(err))
.finally(console.log('Either promise resolved or we get error'))
