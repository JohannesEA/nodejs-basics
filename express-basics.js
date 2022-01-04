const express = require('express');

const app = express();

app.get("/",(req, res) => {
res.status(200).send("Home");
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