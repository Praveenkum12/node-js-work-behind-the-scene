const fs = require("fs");
const server = require("http").createServer();

server.on("request", function (req, res) {
  // strean
  const readable = fs.createReadStream("./test-file.txt");
  readable.pipe(res);
  // readable.on("data", function (chunk) {
  //   res.write(chunk);
  // });

  // readable.on("end", function () {
  //   res.end();
  // });

  // readable.on("error", function (err) {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found...");
  // });
});

server.listen(8000, "127.0.0.1", function () {
  console.log("Listenng....");
});
