const fs = require("fs");

// fs.writeFileSync("new.txt", "hi , file made by node power");

// Synchronous or Blocking -- line by line execution

// Asynchronous or non-Blocking -- line by line exectuion not necessary
                             // -- callback will fire 

let f=fs.readFile("new.txt","utf-8",(err,data)=>{
    console.log(err,data);
})
console.log("This is message")