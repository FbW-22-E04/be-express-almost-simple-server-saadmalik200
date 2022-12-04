import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Welcome to the Hello Page");
});

app.get("/time", (req, res) => {
  res.send(new Date().toISOString());
});

app.get("/random", (req, res) => {
  res.send(`${Math.floor(Math.random() * 100)}`);
});

app.get("/isnumber/:id", (req, res) => {
  //   console.log(req.query);
  //   console.log(req.params.id);

  if (!isNaN(req.params.id)) {
    res.send("This is a number");
  } else {
    res.send("This is not a number");
  }
});

app.listen(4000, () => {
  console.log("server is running");
});
