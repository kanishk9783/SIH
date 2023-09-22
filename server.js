const express = require("express");
const User = require("./Models/user.model");
const app = express();
const mongoose = require("mongoose");
const cors=require("cors")
app.use(cors)
try {
  mongoose
    .connect(
      "mongodb+srv://audichya9876:FzkBz0lwgwIlXEzK@cluster0.iqh4blf.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to database!");
    });
} catch (error) {
  console.log(error);
}
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {
    res.status(404).send("User not found");
  }
});
app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send("User Not Found");
  }
});

app.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
app.patch("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.send("User Details Updated");
  } catch (error) {
    res.send(error.message);
  }
});
app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).send("Deleted");
  } catch (error) {
    res.status(500).send("User Not Found");
  }
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});