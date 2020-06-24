const getPlaceCoordinates = (name, coordinates) => ({
  type: 'GET_PLACEMARK_COORDINATES',
  payload: {
    name,
    coordinates
  }
});

const geocoder = (name, isUserDefined) => {
  return (dispatch, getState) => {
    const {YMapsAPI, mapInstance} = getState().YMaps;

    if (isUserDefined) {
      return dispatch(getPlaceCoordinates(name, mapInstance.getCenter()));
    } else {
      return YMapsAPI.geocode(name).then(response => dispatch(getPlaceCoordinates(name, response.geoObjects.get(0).geometry._coordinates)));
    }
  };
};

export { getPlaceCoordinates, geocoder };