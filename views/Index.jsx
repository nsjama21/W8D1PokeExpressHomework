const React = require("react");
const { render } = require("react-dom");

class Index extends React.Component {
  render() {
    const { pokemon } = this.props
    return (
      <div>
      <h1 style={{backgroundColor: "pink"}}>See All The Pokemon</h1>
      <ul>
        {
          pokemon.map((eachPokemon, i) => {
            return (
              <li key = {i}>
                {eachPokemon.name[0].toUpperCase() + eachPokemon.name.slice(1)} 
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