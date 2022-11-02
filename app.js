"strict mode";
var http = require("http");

var server = http.createServer(function (req, res) {
  //create web server
  if (req.url == "/nacktschnecke") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>nacktschnecke</p></body></html>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>This is about page</p></body></html>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "" });
    res.write("404 Not found");
    res.end();
  }
});

server.listen(5000); //6 - listen for any incoming requests

console.log("Node.js web server at port 5000 is running..");
