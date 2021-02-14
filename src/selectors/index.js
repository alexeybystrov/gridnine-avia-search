import { createSelector } from 'reselect';
import _ from 'lodash';

const getFlights = (state) => state.flights;
const getSortStatus = (state) => state.sort;
const getFilterStatus = (state) => state.filter;

export const getSortedFlights = createSelector(
  [getFlights, getSortStatus],
  (flights, sortBy) => {
    switch (sortBy) {
      case 'ascendingPrice':
        return _.sortBy(flights, 'price');
      case 'descendingPrice':
        return _.sortBy(flights, 'price').reverse();
      case 'ascendingTime':
        return _.sortBy(flights, 'totalDuration');
      default:
        return flights;
    }
  },
);

export const getFilteredFlights = createSelector(
  [getSortedFlights, getFilterStatus],
  (flights, filterBy) => {
    if (filterBy.length === 0) {
      return flights;
    } return flights.filter(({ totalTransfers }) => _.includes(filterBy.transfers, totalTransfers));
  },
);
