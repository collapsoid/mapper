import React from 'react';
import {connect} from 'react-redux';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import './PlacesList.css';

import PlaceSlot from './PlaceSlot/PlaceSlot';
import PlacesItem from './PlaceSlot/PlacesItem/PlacesItem';

const PlacesList = ({places}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="places-list">

	{places.map((place, index) => <PlaceSlot dropIndex={index} children={<PlacesItem {...place} targetIndex={index} />} key={place.id} />)}

      </div>
    </DndProvider>
  );
};

const mapState = ({places}) => ({
  places
});

export default connect(mapState)(PlacesList);
