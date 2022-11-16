const express = require("express")
const app = express() // set express to a variable express()
const port = 3000 // set variable of port to 3000
const pokemon = require("./models/pokemon")

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!")
})

















app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});