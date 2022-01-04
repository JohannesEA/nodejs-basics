const express = require("express");
const path = require("path");

const app = express();

//Spesific routes
app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.get("/page", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./pages/hero.html"));
});

app.get("/about", (req, res) => {
  console.log("Userrrr");
  res.status(200).send("About");
});

//images, javascript --> static files (That the server doesent need to change)
//Example: public/index.html for react apps
app.use(express.static("./public"));

//Default routes
app.all("*", (req, res) => {
  res.status(404).send("Error page");
});

app.listen(5000, () => {
  console.log("Server is listening..");
});

/*
app.get()
app.put()
app.post()
app.delete()
app.all() 
app.use()
app.listen()
*/
