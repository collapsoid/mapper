const YMaps = (state = {mapState: {center: [55.75, 37.57], zoom: 9}}, action) => {
  switch (action.type) {
    case 'GET_YMAPS_API':
      return {...state, YMapsAPI: action.YMapsAPI};
  
    case 'GET_MAP_INSTANCE':
      return {...state, mapInstance: action.mapInstance};

    case 'SET_MAP_STATE':
     return {...state, mapState: {...state.mapState, ...action.mapState}};

    default:
      return state;
  }
};

export default YMaps;