import React from 'react';
import '../styles/Spiritualite.css';

export default class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
                <div id='Main'>Activité pathname={this.props.location.pathname}</div>
        )
    }
}
