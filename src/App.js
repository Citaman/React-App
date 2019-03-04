import React, { Component } from 'react'
import './App.css'
import Spiritual from './pages/Spiritual'
import Physic from './pages/Physic'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

const Nomatch = () => (
  <Redirect to='/spirituality/predication' />
)
export default class App extends Component {

  render() {
    return (
   <Router>
        <div >
          <Route exact path='/' component={Spiritual} />
          <Route path='/spirituality' component={Spiritual} />
          <Route path='/physic' component={Physic} />
          <Route path='/spirituality/predication' />
          <Route path='/spirituality/activity' />
          <Route path='/spirituality/study' />
          <Route path='/spirituality/project' />
          <Route path='/physic/accounting' />
          <Route path='/physic/activity' />
          <Route path='/physic/project' />
          <Route path='/physic/interest' />
          <Route component={Nomatch} />
        </div>
      </Router>)
  }
}