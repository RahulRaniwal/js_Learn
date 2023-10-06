if(true){
    let a= 1;
    const b = 3;
    var c = 5   // var ko avoid hi karna chahiye
}

// console.log(a); // print nahi hoga
// console.log(b); // print nahi hoga
// console.log(c); // print ho jaayega they do not support block-level scope

function one(){
    const user = "Rahul"
    function two(){
        const website = "Youtube"
        console.log(user);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const user = "Rahul"
    if(user === "Rahul"){
        const web = "Youtube"
        // console.log(user + web);
    }
    // console.log(web);     // error dega
}
// console.log(user);   error dega

// ++++++++ Interesting +++++++++++

function addOne(num){
    return num+1;
}
addOne(4)

const addTwo = function(num){
    return num+2
}

addTwo(3)