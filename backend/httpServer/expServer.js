const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const data = require("./API_data.json");



// console.log(data);
app.get("/", (req, res) => {
  res.send("Welcome to my API!");
  res.writeHead(200, { "Content-Type": "Application/json" });
});
 
app.get("/order-list", (req,res) => {
 res.send(data);
});

app.post("/order-list", (req, res) => {
  console.log("Got body:", req.body);
  data.push(req.body);
 res.send(data).status(200).end();
});
app.use("*", (req, res) => {
  res.send(400,"This is wrong URL or Wrong Method seleted!");
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
