const fs=require('fs')
const {readFileSync}=require('fs')

//synchronous function
const ab=readFileSync('./text.txt','utf-8');
console.log(ab);
console.log("abcdefghijklmnopqrstuvwxyz");

//write file
const hello="hello world"
fs.writeFile('./text1.txt',hello,()=>{
    console.log("file written")
})

//aswrite file
 const hello1="hello world!!!!!!!!!"
 fs.writeFile('./text1.txt',hello1,()=>{
     console.log("file written")
 })

//append file
const hello2="hello world!!!!!!!!!!!!!!"
fs.appendFile('./text1.txt',hello2,()=>{
    console.log("file written")
})