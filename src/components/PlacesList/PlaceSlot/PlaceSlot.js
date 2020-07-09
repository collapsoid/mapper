import React from 'react';
import {connect} from 'react-redux';
import {useDrop} from 'react-dnd'; 

import './PlaceSlot.css';

import {changePlacePosition} from '../../../store/actions';

const PlaceSlot = ({children, dropIndex, changePlacePosition}) => {
  const [{getItem}, drop] = useDrop({
    accept: 'place',
    drop: () => changePlacePosition(getItem.targetIndex, dropIndex),
    collect: monitor => ({
      getItem: monitor.getItem()
    })
  });
  
  return <div ref={drop} className="places-list__place-slot">{children}</div>;
};



const mapState = ({places}) => ({
  places
});

export default connect(mapState, {changePlacePosition})(PlaceSlot);
