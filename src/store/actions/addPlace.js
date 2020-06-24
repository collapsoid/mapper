import {nanoid} from 'nanoid';

const addPlace = place => ({
  type: 'ADD_PLACE',
  payload: {
    ...place,
    id: nanoid()
  }
});

export default addPlace;