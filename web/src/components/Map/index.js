import GoogleMapReact from 'google-map-react';
import Marker from '../Marker';
import './styles.css';

const Map = () => {
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyA9GvjJhRuaZc0xjgnO5dgw87GIqQ2RtdY' }}
        center={{
          lat: -23.561684,
          lng: -46.625378,
        }}
        defaultZoom={15}
      >
        <Marker lat={-23.561684} lng={-46.625378}/>
      </GoogleMapReact>
    </div>
  )
}

export default Map
