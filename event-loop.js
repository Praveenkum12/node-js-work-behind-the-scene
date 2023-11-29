const fs = require("fs");

setTimeout(() => console.log("Timer 1 called"), 0);
setImmediate(() => console.log("Immediate 1 called..."));

fs.readFile("./test-file.txt", () => {
  console.log("I/O finished");
  console.log("--------------------");

  setTimeout(() => console.log("Timer 2 called"), 0);
  setTimeout(() => console.log("Timer 3s called"), 3000);
  // fs.readFile("./test-file.txt", () => {
  //   console.log("I/O 2");
  // });
  setImmediate(() => console.log("Immediate 1 called..."));
});

console.log("Hello from top level");
