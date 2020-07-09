import React from 'react';
import {connect} from 'react-redux';
import {useDrag} from 'react-dnd';

import './PlacesItem.css';

import {deletePlace} from '../../../../store/actions';

const PlacesItem = ({name, id, isUserDefined, targetIndex, deletePlace}) => {
  const className = isUserDefined ? ' place_user-defined' : '';
  const [, drag] = useDrag({
    item: {type: 'place', targetIndex}
  });

  return (
    <div className={`places-list__place${className}`} ref={drag}>

      {name}

      <div className="place__remove-button" onClick={() => deletePlace(id)}>x</div>
    </div>
  );
};

export default connect(null, {deletePlace})(PlacesItem);
