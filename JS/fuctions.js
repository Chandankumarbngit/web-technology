let a=function(){
    let b=10
console.log(b)
}
a()
// function declaration
function myFunction(){
    let a=10
    console.log(a)
}
myFunction();

// function expression
function counter(){
    let count=0
    function counter1(){
        count++
        console.log(count)
    }
    return counter1;
}
let counter2=counter()
counter2()
counter2()
counter2()
// arrow function
let myArrowFunction=()=> console.log("this is my arrow function")
myArrowFunction()

//immediately invoked function expression(IIFE)
(function (msg){
    console.log(`this is my IIFE ${msg}`)
})("hello this is function")
;
// function with parameters
(function myFunctionWithParameters(a,b){
    console.log(a,b)
})(5,10)