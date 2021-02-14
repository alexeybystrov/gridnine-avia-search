import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import path from 'path';
// import fs from 'fs';
import _ from 'lodash';
import App from './components/App';
import rootReducer from './slices/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

export default (initialState) => {
  // console.log(initialState);
  const flights = initialState.result.flights
    .filter(({ flight: { legs: { 1: { segments } } } }) => _.hasIn(segments[0], 'departureCity')) // remove 3 'flights from nowhere' in JSON
    .filter(({ flight: { legs: { 0: { segments } } } }) => _.hasIn(segments[segments.length - 1], 'arrivalCity')) // remove 5 'flights to nowhere' in JSON
    .map(({ flight }) => {
      const carrier = flight.carrier.caption;
      const price = Number(flight.price.total.amount);
      const [leftLeg, rightLeg] = flight.legs.map((leg) => {
        const {
          departureCity, departureAirport, departureDate, airline,
        } = leg.segments[0];
        const {
          arrivalCity, arrivalAirport, arrivalDate,
        } = leg.segments[leg.segments.length - 1];

        return {
          duration: leg.duration,
          transfers: leg.segments.length - 1,
          airline,
          departureCity,
          departureAirport,
          departureDate,
          arrivalCity,
          arrivalAirport,
          arrivalDate,
        };
      });

      return {
        carrier,
        price,
        leftLeg,
        rightLeg,
        totalDuration: leftLeg.duration + rightLeg.duration,
        totalTransfers: _.max([leftLeg.transfers, rightLeg.transfers]),
      };
    });
  // console.log(flights);

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: { flights },
  });

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
