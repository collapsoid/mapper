const changePlacePosition = (targetIndex, dropIndex) => ({
  type: 'CHANGE_PLACE_POSITION',
  payload: {
    targetIndex,
    dropIndex
  }
});

export default changePlacePosition;
