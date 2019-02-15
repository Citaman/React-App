import React, { PureComponent } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '100%',
  height: '50%'
}
export class MapContainer extends React.Component {

  render() {
    return (
      <Map google={this.props.google} zoom={14} style={style}>

        <Marker name={'Current location'} />

        <InfoWindow visible = {true}>
            <div>
              <h1>la</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAjDb4pQZzAul2HaC4Ci4tSHOBo7Gj1yCM'
})(MapContainer)