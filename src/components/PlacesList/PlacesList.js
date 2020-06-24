import React from 'react';
import { connect } from 'react-redux';

import './PlacesList.css';

import PlacesItem from './PlacesItem/PlacesItem';

const PlacesList = ({places}) => {
  const placesItems = places.map(place => <PlacesItem {...place} key={place.id} />);

  return (
    <div className="places-list">{placesItems}</div>
  );
};

const mapState = ({places}) => {
  return {
    places
  };
};

export default connect(mapState, null)(PlacesList);