"strict mode"; // this is the file about ex.5
const http = require("http");
const port = 3000;
const server = http.createServer(function (req, res) {
  res.write("nacktschnecke");
  res.end();
});
server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("http://localhost:3000/nacktschnecke"); //logging to the console the current url
  }
});
