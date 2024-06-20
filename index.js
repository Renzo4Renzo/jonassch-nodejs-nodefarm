const fs = require("fs");
const http = require("http");

console.log("========BLOCKING, SYNCHRONOUS WAY========");
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);

const textOutput = `This is what we know about the avocado: ${textInput}. \nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOutput);
console.log("Synchronous file written!");

console.log("\n========NON-BLOCKING, ASYNCHRONOUS WAY========");
fs.readFile("./txt/start.txt", "utf-8", (error, data1) => {
  if (error) return console.log("Error reading the file!");
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (error, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (error, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("Asynchronous file written!");
      });
    });
  });
});
