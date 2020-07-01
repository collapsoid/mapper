import React from 'react';
import {connect} from 'react-redux';
import {Polyline as Poly} from 'react-yandex-maps';

const Polyline = ({places}) => {
	const coordinates = places.map(place => place.coordinates);

	return <Poly geometry={coordinates} />;
};

const mapState = ({places}) => ({
	places
});

export default connect(mapState)(Polyline);
