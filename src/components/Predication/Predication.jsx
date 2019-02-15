import React from 'react';
import './Predication.css'
import MapMark from '../GoogleMap'

export default class Predication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            side: this.props.location.pathname.split('/')[1]
        }
    }

    render() {
        return (
            <div className='Main-Predication'>
                <MapMark
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjDb4pQZzAul2HaC4Ci4tSHOBo7Gj1yCM&v=3.exp"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `50%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <div className ='container-detail'>
                    <h1 className ='h1-Predication'>Prédication</h1>
                    <p> pathname from location props={this.state.side}</p>
                    <p> pathname from match props={this.props.match.path}</p>
                    <p> url from match props={this.props.match.url}</p>
                </div>
            </div>
        )
    }
}
