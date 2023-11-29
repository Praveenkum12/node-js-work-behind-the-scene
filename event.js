const EventEmmiter = require("events");
const http = require("http");

// const myEmmiter = new EventEmmiter();

// myEmmiter.on("newSale", () => {
//   console.log("new sale was started!!!");
// });

// myEmmiter.on("newSale", (customer) => {
//   console.log(`Customer name is ${customer}`);
// });

// myEmmiter.emit("newSale", "Praveen");

const server = http.createServer();
server.on("request", function (req, res) {
  console.log(req.url);
  res.end("Received request!!!");
});

server.on("request", function (req, res) {
  console.log("other request!!!");
});

server.listen(8000, "127.0.0.1", function () {
  console.log("server running...");
});
