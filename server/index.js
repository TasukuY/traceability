const express = require("express");
const cors = require("cors");
const {getCompliment, getFortune, getAllUsers, addUser, editUser, deleteUser, getInspiringMessage} = require('./controller');

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/inspiringMessage", getInspiringMessage);
app.get("/api/users/", getAllUsers);
app.post("/api/adduser/", addUser);
app.delete("/api/delete/:username", deleteUser);
app.put("/api/edit/:username", editUser);

app.listen(4000, () => console.log("Server running on 4000"));
