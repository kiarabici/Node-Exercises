"strict mode"; // this is the file about ex.5
const http = require("http");
const port = 5000;
const server = http.createServer(function (req, res) {
  res.write("This is the string I chose to show...");
  res.end();
});
server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("http://localhost:5000/"); //logging to the console the current url
  }
});
