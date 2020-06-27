import React, { useEffect } from 'react';
import { Placemark as Mark } from 'react-yandex-maps';
import { connect } from 'react-redux';

import { geocoder } from '../../../store/actions';

const Placemark = ({name, isUserDefined, coordinates, geocoder, mapInstance}) => {
  const properties = {
    hintContent: name
  };

  const options = {
    draggable: isUserDefined ? true : false,
    preset: isUserDefined ? 'islands#greenIcon' : 'islands#lightBlueIcon'
  };

  useEffect(() => {
    geocoder(name, isUserDefined);
  }, [name, isUserDefined, geocoder]);

	if (!isUserDefined && coordinates) {
		mapInstance.setCenter(coordinates, 12);
	}

  return <Mark 
            modules={['geoObject.addon.hint']}
            geometry={coordinates} 
            properties={properties}
            options={options} />;
};

const mapState = ({placemarks, YMaps: {mapInstance}}) => ({
  placemarks,
	mapInstance
});

export default connect(mapState, {geocoder})(Placemark);
