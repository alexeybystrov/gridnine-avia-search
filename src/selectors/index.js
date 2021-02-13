import { createSelector } from 'reselect';
import _ from 'lodash';

const getFlights = (state) => state.flights;
const getSortStatus = (state) => state.sort;

const getSortedFlights = createSelector(
  [getFlights, getSortStatus],
  (flights, sortBy) => {
    switch (sortBy) {
      case 'ascendingPrice':
        console.log(flights);
        return _.sortBy(flights, 'price');
      case 'descendingPrice':
        return _.sortBy(flights, 'price').reverse();
      case 'ascendingTime':
        return _.sortBy(flights, 'totalDuration');
      default:
        console.log(flights);
        return flights;
    }
  },
);

export default getSortedFlights;
