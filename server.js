const express = require("express")
const app = express() // set express to a variable express()
const port = 3000 // set variable of port to 3000
const pokemon = require("./models/pokemon") // set 'database' to a variable called
const reactViews = require('express-react-views')

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())


app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!")
})


// create a get route /pokemon that will res.send(pokemon) which will display your pokemon data as json in the browser
// app.get('/pokemon', (req, res) => {
//   res.send(pokemon);
// });

app.get('/pokemon', (req, res) => {
  res.render("Index", { pokemon: pokemon });
});















app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});