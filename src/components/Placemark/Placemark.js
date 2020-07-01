import React from 'react';
import {Placemark as Mark} from 'react-yandex-maps';
import {connect} from 'react-redux';

import {changeCoordinates} from '../../store/actions';

const Placemark = ({name, isUserDefined, coordinates, mapInstance, changeCoordinates}) => {
  const properties = {
    hintContent: name
  };

  const options = {
    draggable: isUserDefined ? true : false,
    preset: isUserDefined ? 'islands#greenIcon' : 'islands#lightBlueIcon'
  };

	if (!isUserDefined && coordinates) {
		mapInstance.setCenter(coordinates, 12);
	}

  return <Mark 
            modules={['geoObject.addon.hint']}
            geometry={coordinates} 
            properties={properties}
            options={options} 
						onGeometryChange={(e) => changeCoordinates(name, e.originalEvent.target.geometry._coordinates)}
				/>;
};

const mapState = ({YMaps: {mapInstance}}) => ({
	mapInstance
});

export default connect(mapState, {changeCoordinates})(Placemark);
