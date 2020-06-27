import React, { useState } from 'react';
import { connect } from 'react-redux';

import './SearchBar.css';

import { addPlace } from '../../store/actions';

import Popup from '../decoration/Popup/Popup';

const SearchBar = ({places, addPlace}) => {
  const [value, setValue] = useState('');
  const [badName, setBadName] = useState(false);

  const inputHadler = ({target: {value}}) => {
    setValue(value);
    isPlaceAlreadyExist(value) ? setBadName(true) : setBadName(false);
  };

  const isPlaceAlreadyExist = (value) => {
    return places.findIndex(place => place.name.toLowerCase() === value.toLowerCase().trim()) === -1 ? false : true;
  }

  const appendPlace = () => {
    const place = {
      name: value.trim(),

      // If the name of the place is preceeded by "!",
      // then the coordinates of the place will be set from the center of the map.
      // Otherwise, the geocoder will search for coordinates by the entered name
      isUserDefined: value.startsWith('!') ? true : false
    };

    if (badName) {
      return;
    }

    setValue('');

    return addPlace(place);
  };

  return (
    <div className="input">
      <input
        className={`search-bar${badName ? ' bad-name' : ''}`}
        type="text"
        value={value}
        placeholder="Where to go?"
        onChange={inputHadler}
        onKeyDown={({key}) => key === 'Enter' ? appendPlace() : null} />

      <Popup className="input__popup" text="Enter the name of the city or type something like !MyPlacemark to set your own mark label" />
    </div>
  );
};

const mapState = ({places}) => {
  return {
    places
  };
};

export default connect(mapState, {addPlace})(SearchBar);
