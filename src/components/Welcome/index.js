import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Welcome = ({ match }) => (
  <div>
    <h3>Welcome to my Calculator</h3>
  </div>
)

export default Welcome
