const express = require("express");
const router = express.Router();
const UsersPointer = require("../users.js");

router.post("/register", async (req, res) => {
    const data = req.body;
    if (!data.email || !data.name || !data.password){
        res.status(403).send({message: "error"})
        return
    }
    const existedUser = await UsersPointer.findOne({
        email: data.email
    })
    if (existedUser){
        res.status(403).send({message: "User already exist"})
        return
    }
    const user = await UsersPointer.create({
        email: data.email, name: data.name, password: data.password
    })
    res.send(user);
})

router.post("/login", async (req, res) => {
    const data = req.body;
    if (!data?.email || !data?.password) {
        res.status(403).send({message: "error"})
        return
    }
    const existedUser = await UsersPointer.findOne({
        email: data.email, password: data.password
    })
    if (!existedUser){
        res.status(403).send({message: "User not found"})
        return
    }
    res.send(existedUser);
})

router.get("/", function(req, res){
    res.sendFile(`${process.cwd()}\\index.html`)
});

module.exports = router;