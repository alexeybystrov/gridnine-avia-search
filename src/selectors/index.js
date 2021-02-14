import { createSelector } from 'reselect';
import _ from 'lodash';

const getFlights = (state) => state.flights;
const getSortStatus = (state) => state.sort;
const getFilterStatus = (state) => state.filter;

const getSortedFlights = createSelector(
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

const transfersSelector = createSelector(
  [getSortedFlights, getFilterStatus],
  (flights, filterBy) => {
    if (filterBy.transfers.length === 0) {
      return flights;
    } return flights.filter(({ totalTransfers }) => _.includes(filterBy.transfers, totalTransfers));
  },
);

const priceFromSelector = createSelector(
  [getSortedFlights, getFilterStatus],
  (flights, filterBy) => {
    if (filterBy.price.from === null) {
      return flights;
    } return flights.filter(({ price }) => price >= filterBy.price.from);
  },
);

const priceUpToSelector = createSelector(
  [getSortedFlights, getFilterStatus],
  (flights, filterBy) => {
    if (filterBy.price.upTo === null || filterBy.price.upTo === '0') {
      return flights;
    } return flights.filter(({ price }) => price <= filterBy.price.upTo);
  },
);

const carriersSelector = createSelector(
  [getSortedFlights, getFilterStatus],
  (flights, filterBy) => {
    if (filterBy.carriers.length === 0) {
      return flights;
    } return flights.filter(({ carrier }) => _.includes(filterBy.carriers, carrier));
  },
);

export const priceCarriersSelector = createSelector(
  priceFromSelector,
  priceUpToSelector,
  carriersSelector,
  (byPriceFrom, byPriceUpTo, byCarriers) => (
    _.intersection(byPriceFrom, byPriceUpTo, byCarriers)
  ),
);

export const transfersPriceSelector = createSelector(
  transfersSelector,
  priceFromSelector,
  priceUpToSelector,
  (byTransfers, byPriceFrom, byPriceUpTo) => (
    _.intersection(byTransfers, byPriceFrom, byPriceUpTo)
  ),
);

const totalSelector = createSelector(
  transfersSelector,
  priceFromSelector,
  priceUpToSelector,
  carriersSelector,
  (byTransfers, byPriceFrom, byPriceUpTo, byCarriers) => (
    _.intersection(byTransfers, byPriceFrom, byPriceUpTo, byCarriers)
  ),
);

export default totalSelector;
