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

export const transfersSelector = createSelector(
  [getSortedFlights, getFilterStatus],
  (flights, filterBy) => {
    if (filterBy.transfers.length === 0) {
      return flights;
    } return flights.filter(({ totalTransfers }) => _.includes(filterBy.transfers, totalTransfers));
  },
);

export const carriersSelector = createSelector(
  [getSortedFlights, getFilterStatus],
  (flights, filterBy) => {
    if (filterBy.carriers.length === 0) {
      return flights;
    } return flights.filter(({ carrier }) => _.includes(filterBy.carriers, carrier));
  },
);

export const getFilteredFlights = createSelector(
  [transfersSelector, carriersSelector],
  (byTransfers, byCarriers) => _.intersection(byTransfers, byCarriers),
);
