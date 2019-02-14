import React, { Component } from 'react'
import './App.css'
import Spiritual from './pages/Spiritual'
import Physic from './pages/Physic'
import Study from './components/Study'
import Activity from  './components/Activity'
import Predication from './components/Predication'
import Accounting from './components/Accounting'
import Project from './components/Project'
import InterestingSubject from './components/InterestingSubject'
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom"

const Nomatch = ()=>(
  <Redirect to='/spirituality/predication'/>
)

export default class App extends Component {

  render() {
    return (
      <Router>
        <div >
          <Route exact path='/' component={Spiritual} />
          <Route path='/spirituality' component={Spiritual} />
          <Route path='/physic' component={Physic} />
          <Route path='/spirituality/predication' component={Predication} />
          <Route path='/spirituality/activity' component={Activity} />
          <Route path='/spirituality/study' component={Study} />
          <Route path='/spirituality/project' component={Project} />
          <Route path='/physic/accounting' component={Accounting} />
          <Route path='/physic/activity' component={Activity} />
          <Route path='/physic/project' component={Project} />
          <Route path='/physic/interest' component={InterestingSubject} />
          <Route component={Nomatch}/>
        </div>
      </Router>
    )
  }
}