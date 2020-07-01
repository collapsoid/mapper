import React from 'react';

import SearchBar from './SearchBar/SearchBar';
import PlacesList from './PlacesList/PlacesList';
import Maps from './Maps/Maps';

const App = () => {
  return (
    <>
			<SearchBar />
			<PlacesList />
			<Maps />
    </>
  );
}

export default App;
