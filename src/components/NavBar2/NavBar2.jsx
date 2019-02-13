import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './NavBar2.styles';

class NavBar2 extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('NavBar2 will mount');
  }

  componentDidMount = () => {
    console.log('NavBar2 mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('NavBar2 will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('NavBar2 will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('NavBar2 did update');
  }

  componentWillUnmount = () => {
    console.log('NavBar2 will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NavBar2Wrapper">
        Test content
      </div>
    );
  }
}

NavBar2.propTypes = {
  // bla: PropTypes.string,
};

NavBar2.defaultProps = {
  // bla: 'test',
};

export default NavBar2;
