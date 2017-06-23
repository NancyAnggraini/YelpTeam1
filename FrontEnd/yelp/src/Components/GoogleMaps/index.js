import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  render() {
    return (
      <div className="Map-MapWindow" style={{width:'200px', height:'300px',}}>
        <GoogleMapReact
          defaultCenter={{lat: 47.368650, lng: 8.539183}}
          defaultZoom={14}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
        </div>
      );
  }
}

export default Map;
