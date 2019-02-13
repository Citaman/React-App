import React, { Component } from 'react';
import './App.css';
import Spirituality from './pages/Spirituality';
import Home from './pages/Home';
import NavBar from './components/Nav-Bar/NavBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className='Container'>
          <NavBar />
          <Route exact path='/' component={Spirituality} />
        </div>
      </Router>
    );
  }
}
