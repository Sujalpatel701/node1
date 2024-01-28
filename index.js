console.log("hello world")

//file base module
const a={
    name:"sachin",
    age:23,
    address:"pune",

    aver:(a,b)=>{
        console.log((a+b)/2)
    },

    sum:(a,b)=>{
        console.log(a+b)
    },

    sub:(a,b)=>{
        console.log(a-b)
    },
}

module.exports=a

const e = require('express')
const fs=require('fs')
//console.log(fs)

//asynchronous function
fs.readFile('./text.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

console.log("hello world!!!!!!!!!!!");




//synchronous function
const file=fs.readFileSync('./text.txt','utf-8');
console.log(file);
console.log("");