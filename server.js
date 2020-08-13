const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
// const books = require("./routes/api/books");
const users = require("./routes/users");
const app = express();
const login = require("./routes/login");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);

app.use("/api/users", users);

app.use("/api/login", login);

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/mern-starter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to database.");
  })
  .catch((err) => {
    console.log("Unable to connect to database.");
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
