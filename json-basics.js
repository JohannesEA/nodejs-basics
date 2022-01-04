const express = require("express");
const path = require("path");
const data = require("./data/data");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./pages/hero.html"));
});

app.get("/api/products", (req, res) => {
  res.json(data.products);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const prod = data.products.find((p) => p.id === Number(id));

  if (!prod) {
    console.log(prod);
    return res.status(404).send("Product does not exist");
  } else {
    console.log("prod");
    return res.json(prod);
  }
});

app.get("/api/products/:id/reviews/:reviedId", (req, res) => {
  const params = req.params;
  console.log(params);
  res.status(200).send("Hello world");
});

app.listen(5000, () => {
  console.log("Server is listening..");
});
