// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    fs.readFile("comments.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("404 Not Found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });
