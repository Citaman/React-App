import React, { Component } from 'react'
import './App.css'
import Spirituality from './pages/Spirituality'
import Accounting from './pages/Accounting'
import Activity from './pages/Activity'
import InterestingSubject from './pages/InterestingSubject'
import Predication from './pages/Predication'
import Project from './pages/Project'
import Study from './pages/Study'
import Home from './pages/Home'
import NavBar from './components/Nav-Bar/NavBar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className='Container'>
          <NavBar />
          <Route exact path='/' component={Predication} />
          <Route path='/spirituality/predication' component={Predication} />
          <Route path='/spirituality/activity' component={Activity} />
          <Route path='/spirituality/study' component={Study} />
          <Route path='/spirituality/project' component={Project} />
          <Route path='/physic/accounting' component={Accounting} />
          <Route path='/physic/activity' component={Activity} />
          <Route path='/physic/project' component={Project} />
          <Route path='/physic/interest' component={InterestingSubject} />
        </div>
      </Router>
    )
  }
}
