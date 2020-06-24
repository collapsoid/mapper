import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { places, YMaps } from './reducers';

const store = createStore(combineReducers({places, YMaps}), applyMiddleware(thunk));

export default store;