import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import GoogleMap from 'google-map-react';

export default function Home() {

  const defaultProps = {
    center: {
      lat: 46.7791242,
      lng: 9.0371319
    },
    zoom: 5
  };

  const renderMarkers = (map, maps) => {
    let paris = new maps.Marker({
      position: { lat: 48.855590708859566, lng: 2.3530613929627053 },
      map,
      title: 'Paris'
    });
    let madrid = new maps.Marker({
      position: { lat: 40.416859636776984, lng: -3.7034556102807246 },
      map,
      title: 'Madrid'
    });
    let berlin = new maps.Marker({
      position: { lat: 52.520308621077454, lng: 13.404942771371989 },
      map,
      title: 'Berlin'
    });
    let rome = new maps.Marker({
      position: { lat: 41.902800021326414, lng: 12.496199781074848 },
      map,
      title: 'Rome'
    });
    let varsovie = new maps.Marker({
      position: { lat: 52.22761382977419, lng: 21.01160953071247 },
      map,
      title: 'Varsovie'
    });
    return { paris, madrid, berlin, rome, varsovie };
  };



  return (
    <div style={{ height: '550px', width: '100%' }}>
      <Navigation />
      <Logo />
      <GoogleMap
        bootstrapURLKeys={{ key: "AIzaSyAGKLyy2Tn32dLsH9hOpsPQlFOe7DWfiJ8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >

      </GoogleMap>
    </div>
  );
}