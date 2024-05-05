// Primitive data types
// 7 types:
// String, number, boolean, null, undefined, symbol, bigint

// Refrence type or non primitive
// Arrays, objects, functions
const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id==anotherId)

//Arrays
const crickiters=["Babar","Amir","Kohli","Rizwan"]
{ //objects are written in curly braces
    name:"Hashar"
    age:23
}
const myFunction= function(){
    console.log("hello world")
}