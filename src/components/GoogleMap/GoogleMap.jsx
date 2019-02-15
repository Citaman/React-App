import React from 'react';
import {withScriptjs,withGoogleMap,GoogleMap,Marker,} from "react-google-maps";
  
const MapMark = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 48.7854032, lng: 2.437342 }}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
      />
    </GoogleMap>
  ));

  export default MapMark