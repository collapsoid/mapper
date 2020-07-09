import React, {useState, useEffect} from 'react';
import {YMaps, Map} from 'react-yandex-maps';
import {connect} from 'react-redux';

import './Maps.css';

import apikey from '../../API/apikey';

import {getYMapsAPI, getMapInstance} from '../../store/actions';
import Placemark from '../Placemark/Placemark';
import Polyline from '../Polyline/Polyline';

const Maps = ({getYMapsAPI, getMapInstance, places, mapState, geocoder}) => {
  const [mapRef, setMapRef] = useState(null); // Without this hook, an infinite loop of value assignment will appear

  const placemarks = places.map(place => <Placemark {...place} key={place.id} />);

  useEffect(() => {
    if (mapRef) {
      getMapInstance(mapRef);
    }
  }, [mapRef, getMapInstance]);

  return (
    <YMaps query={{load: ['geocode'], apikey: apikey}}>
      <Map
        className="map"
        state={mapState}
        onLoad={YMaps => getYMapsAPI(YMaps)}
        instanceRef={map => setMapRef(map)}>

	{placemarks}

	<Polyline />

      </Map>
    </YMaps>
  );
};


const mapState = ({places, YMaps: {mapState, mapInstance}}) => {
  return {
    places,
    mapState,
    mapInstance
  };
};

export default connect(mapState, {getYMapsAPI, getMapInstance})(Maps);
