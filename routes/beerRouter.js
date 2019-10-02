const express = require("express")
const beerRouter = express.Router()

beerRouter.get("/", (req, res) => {
    //send beers
})

beerRouter.post("/", (req, res) => {
    //save a beer
})

beerRouter.use("/", (req, res) => { //catch all
    res.send("Beer router is workring!")
})

module.exports = beerRouter