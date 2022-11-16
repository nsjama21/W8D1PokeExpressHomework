const express = require("express")
const app = express() // set express to a variable express()
const port = 3000 // set variable of port to 3000
const pokemon = require("./models/pokemon") // set 'database' to a variable called
const reactViews = require('express-react-views') // express react views lets us parse/render a jsx react component

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

app.get("/pokemon/:id", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit])
  // id is a route paramater
  res.render("Show", pokemon[req.params.id])

})

















app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});