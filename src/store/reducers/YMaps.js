const YMaps = (state = {}, action) => {
  switch (action.type) {
    case 'GET_YMAPS_API':
      return {...state, YMapsAPI: action.YMapsAPI};
  
    case 'GET_MAP_INSTANCE':
      return {...state, mapInstance: action.mapInstance};

    default:
      return state;
  }
};

export default YMaps;