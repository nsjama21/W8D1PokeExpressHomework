require("dotenv").config()
const express = require("express")
const app = express() // set express to a variable express()
const port = 3000 // set variable of port to 3000
const Pokemon = require("./models/pokemons") // set 'database' to a variable called
const reactViews = require('express-react-views') // express react views lets us parse/render a jsx react component
const mongoose = require("mongoose")



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
  console.log("connected to mongo")
})


app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

// middleware: next is the only way to move on with your route
app.use((req, res, next) => {
  console.log("Im running for all routes")
  console.log("1. middleware")
  next()
})

// a new body object containing new parsed data after the middleware?
app.use(express.urlencoded({ extended: false }))



app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!")
})



// create a get route /pokemon that will res.send(pokemon) which will display your pokemon data as json in the browser
// app.get('/pokemon', (req, res) => {
//   res.send(pokemon);
// });

// INDEX:

app.get('/pokemons', (req, res) => {
  Pokemon.find({}, (error, allPokemons) => {
    if (!error) {
      res.status(200).render("Index", {
        pokemons: allPokemons
      })
    } else {
      res.status(400).send(error)
    }
  })

  // res.render("Index");
});

app.get("/pokemons/new", (req, res) => {
  console.log("2. controller")
  res.render("New")
})



// SHOW ROUTE:

app.get("/pokemons/:id", (req, res) => {
  Pokemon.findById(req.params.id, (error, foundPokemon) => {
    if (!error) {
      res
        .status(200)
        .render("Show", {
          pokemon: foundPokemon
        })
    } else {
      res
        .status(400)
        .send(error)
    }
  })
  // res.send(fruits[req.params.indexOfFruit])
  // id is a route paramater
  // res.render("Show", pokemons[req.params.id])

})


// CREATE/POST ROUTE:


app.post("/pokemons", (req, res) => {
  console.log(req.body)

  req.body.img = "http://img.pokemondb.net/artwork/" + req.body.name
  // pokemons.push(req.body)

  Pokemon.create(req.body, (error, createdPokemon) => {
    if (!error) {
      res.status(200).redirect("/pokemons")
    } else {
      res.status(400).send(error)
    }
  })
  // res.redirect("/pokemons")
})
















app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});