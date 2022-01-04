const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home page</h1>");
  }
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About page</h1>");
  }
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end("<h1>Page not found</h1>");
});

server.listen(5000, () => {
  console.log("Server is listening.. ");
});
