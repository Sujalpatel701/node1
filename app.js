const fs=require('fs')


//synchronous function
const ab=fs.readFileSync('./text.txt','utf-8');
console.log(ab);
console.log("abcdefghijklmnopqrstuvwxyz");


//file base module
const a=require('./index.js');

console.log(a.name);
console.log(a.age);
console.log(a.address);

a.aver(10,20);
a.sum(10,20);
a.sub(10,20);

//path module
const path=require('path');
const path1=path.basename('./node1/text.txt');
console.log(path1);



