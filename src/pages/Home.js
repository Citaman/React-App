import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    return  <Redirect to="/spirituality" />;

}
}

export default Home;