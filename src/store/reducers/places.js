const places = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLACE':
      return [...state, {...action.payload}];

    case 'DELETE_PLACE':
      return state.filter(place => place.id !== action.id);

    case 'CHANGE_PLACE_POSITION':
      const {targetIndex, dropIndex} = action.payload;
      const arrayWithoutTargetItem = state.filter(place => place.name !== state[targetIndex].name);

      return [...arrayWithoutTargetItem.slice(0, dropIndex), state[targetIndex], ...arrayWithoutTargetItem.slice(dropIndex)];

    case 'CHANGE_COORDINATES':
      const {name, coordinates} = action.payload;

      return state.map(place => place.name === name ? {...place, coordinates} : place);

    default:
      return state;
  }
}

export default places;
