// const os = require('./os-modules');
// const moduleBasics = require("./module-basic");
// const pathBasics = require("./path-basics");
// console.log(pathBasics.filePath);
// console.log(os.currensOS);
// moduleBasics.log("Helo world");
// console.log(moduleBasics.KEY);

const express = require('express');
const path = require('path');

const app = express();

app.get("/",(req, res) => {
res.status(200).send("Home");
})

app.get("/page",(req, res) => {
  res.sendFile(path.resolve(__dirname, "./pages/hero.html"));
  })

app.get("/about",(req, res) => {
  console.log("Userrrr");
res.status(200).send("About");
})

app.all("*",(req, res) => {
res.status(404).send("Error page");
})

app.listen(5000,() => {
  console.log("Server is listening..");
})


/*
app.get()
app.put()
app.post()
app.delete()
app.all()
app.use()
app.listen()
*/ 
