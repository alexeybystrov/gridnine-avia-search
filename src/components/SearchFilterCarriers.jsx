/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { filterCarriers } from '../slices/filterSlice.js';

const SearchFilterCarriers = () => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);
  const carriers = _.uniq(flights.map((flight) => flight.carrier)).sort();

  const handleFilter = (values) => {
    dispatch(filterCarriers(values.target.name));
  };

  return (
    <div className="d-flex mb-3">
      <Formik
        initialValues={{
          picked: '',
        }}
      >
        {({ values }) => (
          <Form onChange={handleFilter}>
            <div id="checkbox-group" className="font-weight-bold">Авиакомпании</div>
            <div role="group" aria-labelledby="checkbox-group">
              {carriers.map((carrier) => (
                <div className="form-check" key={_.uniqueId()}>
                  <label className="form-check-label">
                    <Field type="checkbox" name={carrier} value={values.name} className="form-check-input" />
                    {carrier}
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

export default SearchFilterCarriers;
