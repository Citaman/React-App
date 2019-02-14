import React from 'react';
import '../../styles/Spiritualite.css'

export default class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            side: this.props.location.pathname.split('/')[1]
        }
    }

    render() {
        return (
            <div id='Main'>
                <h1>Activité</h1>
                <p> pathname from location props={this.state.side}</p>
                <p> pathname from match props={this.props.match.path}</p>
                <p> url from match props={this.props.match.url}</p>
            </div>

        )
    }
}
