import React, { Component } from 'react'
import './App.css';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layouts/Index'

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div class="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    )
  }
}



