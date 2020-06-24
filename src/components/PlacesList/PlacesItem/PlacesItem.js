import React from 'react';
import { connect } from 'react-redux';

import './PlacesItem.css';

import { deletePlace } from '../../../store/actions';

const PlacesItem = ({name, id, isUserDefined, deletePlace}) => {
  const className = isUserDefined ? ' place_user-defined' : '';

  return (
    <div className={`places-list__place${className}`}>
      {name}
      <div className="place__remove-button" onClick={() => deletePlace(id)}>x</div>
    </div>
  );
};

export default connect(null, {deletePlace})(PlacesItem);