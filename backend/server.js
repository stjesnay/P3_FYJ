const express = require("express");
const Artifact = require("./classes/artifact.js");
const User = require("./classes/user.js");

let app = express();
const port = 3001;

app.get("/api", function (req, res) {
  res.json({ message: "Hello from Server" });
});

app.get("/api/artifact/:id", async function (req, res) {
  const id = req.params.id;
  const artifact = await Artifact.getAll(id);
  res.json({
    name: artifact.name,
    latitude: artifact.latitude,
    longitude: artifact.longitude,
  });
});

app.get("/api/user/:id", async function (req, res) {
  const id = req.params.id;
  const name = await User.getName(id);
  const email = await User.getEmail(id);
  const level = await User.getLevel(id);
  res.json({ name: name, email: email, level: level });
});

app.listen(port, function () {
  console.log("App is listening on: http://localhost:" + port);
});
