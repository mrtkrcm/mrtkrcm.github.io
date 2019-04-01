import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import HelloWorld from './shared-components/dmi-mch-hello-world'
import EventForm from './shared-components/dmi-mch-event-form'

import './App.css'

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
            <Link to='/event-form'>Event form</Link>
          </header>
        </div>
        <Route path="/" exact component={null} />
        <Route path="/hello-world" exact component={HelloWorld} />
        <Route path="/event-form" exact component={EventForm} />
      </Router>
    )
  }
}

export default App
