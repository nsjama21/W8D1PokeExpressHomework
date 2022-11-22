const React = require("react");
const { render } = require("react-dom");

class Index extends React.Component {
  render() {
    const { pokemons } = this.props
    return (
      <div>
      <h1 style={{backgroundColor: "pink"}}>See All The Pokemon</h1>
       <nav>
          <a href="/pokemons/new">Create New</a>
        </nav>
      <ul>
        {
          pokemons.map((pokemon, i) => {
            return (
               <li> 
                  The{' '}
                  <a style={{color: "red"}} href={`/pokemons/${pokemon._id}`}>{pokemon.name}</a>
                  {" "}
                  is {pokemon.name} <br />
            
                  <br />
               
                {/* <a href={`/pokemons/${i}`}>{eachPokemon.name[0].toUpperCase() + eachPokemon.name.slice(1)}</a> */}
              </li>
            )
          })
        }
      </ul>
      </div>
    );
  }
}

module.exports = Index


// <h1 style={{backgroundColor: "pink"}}>See All The Pokemon</h1>