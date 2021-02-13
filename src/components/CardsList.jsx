import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import Card from './Card.jsx';
import getSortedFlights from '../selectors/index.js';

const CardsList = () => {
  // const flights = useSelector((state) => state.flights);
  const sortedFlights = useSelector(getSortedFlights);

  return (
    <div className="col h-100" style={{ marginLeft: '250px' }}>
      {sortedFlights.map((flight) => (
        <Card flight={flight} key={_.uniqueId()} />
      ))}
    </div>
  );
};

export default CardsList;
