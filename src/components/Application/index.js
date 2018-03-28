import Header from '../Header'
import About from '../About'
import Welcome from '../Welcome'
import ConnectedCalc from '../Calculator'
import Footer from '../Footer'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Application extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header />
          <Route exact path="/" component={Welcome}/>
          <Route path="/about" component={About}/>
          <Route path="/calculator" component={ConnectedCalc}/>
        <Footer />
      </div>
    </Router>
    )
  }
}

export default Application
