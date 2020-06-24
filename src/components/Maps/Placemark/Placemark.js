import React, { useEffect } from 'react';
import { Placemark as Mark } from 'react-yandex-maps';
import { connect } from 'react-redux';

import { geocoder } from '../../../store/actions';

const Placemark = ({name, isUserDefined, coordinates, geocoder}) => {
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

  return <Mark 
            modules={['geoObject.addon.hint']}
            geometry={coordinates} 
            properties={properties}
            options={options}
            />;
};

const mapState = ({placemarks}) => ({
  placemarks
});

export default connect(mapState, {geocoder})(Placemark);