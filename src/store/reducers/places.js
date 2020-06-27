const places = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLACE':
      return [...state, {...action.payload}];

    case 'DELETE_PLACE':
      return state.filter(place => place.id !== action.id);

      case 'GET_PLACE_COORDINATES':
        return state.map(place => place.name === action.payload.name ? {...place, coordinates: action.payload.coordinates} : place);
  
    default:
      return state;
  }
}

export default places;