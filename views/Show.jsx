const React = require("react");
// const { render } = require("react-dom");


class Show extends React.Component {
  render() {
    const {name} = this.props.pokemon
    return (
      <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{name}</h2>
      {/* <img src={img + ".jpg"}/> */}

      {/* BELOW IS IMAGE PATH FOR EACH POKEMON */}
      
      {/* <img src={`${img}.jpg`}/> */}

      
      <a href={`/pokemons/`}>Back</a>
      {/* <ul>
        {
          pokemon.map((eachPokemon, i) => {
            return (
              <li key = {i}>
                {eachPokemon.name[0].toUpperCase() + eachPokemon.name.slice(1)} 
              
              </li>
            )
          })
        }
      </ul> */}
      </div>
    );
  }
}

module.exports = Show