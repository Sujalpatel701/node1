console.log("hello world")

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