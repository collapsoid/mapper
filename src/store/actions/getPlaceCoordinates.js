const getPlaceCoordinates = (name, coordinates) => ({
  type: 'GET_PLACE_COORDINATES',
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
      return YMapsAPI.geocode(name).then(response => {
        const coordinates = response.geoObjects.get(0).geometry._coordinates;

        return dispatch(getPlaceCoordinates(name, coordinates));
      });
    }
  };
};

export { getPlaceCoordinates, geocoder };
