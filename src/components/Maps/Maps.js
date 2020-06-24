import React, { useState, useEffect } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import { connect } from 'react-redux';

import './Maps.css';

import apikey from '../../API/apikey';

import { getYMapsAPI, getMapInstance } from '../../store/actions';
import Placemark from './Placemark/Placemark';

const Maps = ({getYMapsAPI, getMapInstance, mapInstance, places}) => {
  const [mapCenter, setMapCenter] = useState([55.75, 37.57]);
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
        state={{center: mapCenter, zoom: 9}}
        onLoad={YMaps => getYMapsAPI(YMaps)}
        instanceRef={map => setMapRef(map)}
        onBoundsChange={() => setMapCenter(mapInstance.getCenter())}
        >
          {placemarks}
      </Map>
    </YMaps>
  );
};

const mapState = ({places, YMaps}) => {
  return {
    places,
    mapInstance: YMaps.mapInstance
  };
};

export default connect(mapState, {getYMapsAPI, getMapInstance})(Maps);