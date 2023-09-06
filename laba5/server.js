const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./router/router.js");
app.use(express.json())
app.use(express.static("clientside"))
app.use(router);

app.listen(5000, async()=>{
    mongoose.connect("mongodb://127.0.0.1/lab5")
});