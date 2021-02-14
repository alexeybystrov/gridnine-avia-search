/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { filterTransfers } from '../slices/filterSlice.js';
import { priceCarriersSelector } from '../selectors/index.js';

const SearchFilterTransfers = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);
  const transfers = _.uniq(flights.map((flight) => flight.totalTransfers)).sort();
  const filteredFlights = useSelector(priceCarriersSelector);
  const checkedTransfers = _.uniq(filteredFlights.map((flight) => flight.totalTransfers));

  const handleChange = (values) => {
    dispatch(filterTransfers(Number(values.target.name)));
  };

  return (
    <div className="d-flex mb-3">
      <Formik
        initialValues={{}}
      >
        {({ values }) => (
          <Form onChange={handleChange}>
            <div id="checkbox-group" className="font-weight-bold">Пересадки</div>
            <div role="group" aria-labelledby="checkbox-group">
              {transfers.map((transfer) => (
                <div className="form-check" key={_.uniqueId()}>
                  <label className="form-check-label">
                    <Field type="checkbox" name={transfer} value={values.name} className="form-check-input" disabled={!_.includes(checkedTransfers, transfer)} />
                    {transfer}
                  </label>
                </div>
              ))}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchFilterTransfers;
