const React = require('react')

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Page</h1>
        <nav>
          <a href="/pokemons">Home Page</a>
        </nav>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form action="/pokemons" method="POST">
          Name: <input type="text" name="name" /><br/>
          <input type="submit" value="Create Pokemon" />
        </form>
      </div>
    )
  }
}

module.exports = New