import {nanoid} from 'nanoid';

const addPlace = place => ({
  type: 'ADD_PLACE',
  payload: {
    ...place,
    id: nanoid()
  }
});


const geocoder = (name, isUserDefined) => {
  return (dispatch, getState) => {
    const {YMapsAPI, mapInstance} = getState().YMaps;

    const place = {
      name,
      isUserDefined
    };

    if (isUserDefined) {
      const coordinates = mapInstance.getCenter();

      return dispatch(addPlace({...place, coordinates}));
    } else {
      return YMapsAPI.geocode(name).then(response => {
	const coordinates = response.geoObjects.get(0).geometry._coordinates;

	return dispatch(addPlace({...place, coordinates}));
      });
    }
  };
};


export {addPlace, geocoder};
