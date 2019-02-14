import React from 'react';
import '../styles/Spiritualite.css';

export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
                <div id='Main'>Projet pathname={this.props.location.pathname}</div>
        )
    }
}
