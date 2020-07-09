const changeCoordinates = (name, coordinates) => ({
  type: 'CHANGE_COORDINATES',
  payload: {
    name,
    coordinates
  }
});

export default changeCoordinates;
