
// console.log("this is my first time nodejs cmd");
// let a = 10;
// const b = 20;
// const c = 20;

// console.log(a+b,b-b+c,b*c);
// const readline = require("node:readline");


// const CI = readline.createInterface({ 
//     input: process.stdin,
//     output:process.stdout
// });

// CI.question("How do you want to connect", (ans) => {
//     console.log(ans);
//     CI.close();
// })

const fs = require("node:fs");
// const { log } = require("node:console");
// fs.readFile("sample.txt", (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data.toString());
// })

const str = "\n Hello world 1+";

// fs.writeFile("sample.txt", str, (err) => {
// if (err) {
//   console.error(err);
// } else {
//   // file written successfullyhd
//     }
//     return;
// });

fs.appendFile("sample.txt", str, (err) => { 
   if (err) {
     console.error(err);
   } 
})