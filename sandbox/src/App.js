import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HelloWorld from './shared-components/dmi-mch-hello-world'

import './App.css'

function Index() {
  return <h2>Home Page</h2>;
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h2>
              MCH Sandbox
            </h2>
            <Link to='/'>Home</Link>
            <Link to='/hello-world'>Hello World</Link>
          </header>
        </div>
        <Route path="/" exact component={Index} />
        <Route path="/hello-world" exact component={HelloWorld} />
      </Router>
    )
  }
}

export default App
