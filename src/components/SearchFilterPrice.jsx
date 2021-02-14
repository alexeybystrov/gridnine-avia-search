/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { filterPriceFrom, filterPriceUpTo } from '../slices/filterSlice.js';

const SearchFilterPrice = () => {
  const dispatch = useDispatch();

  const handleChange = (values) => {
    switch (values.target.name) {
      case 'priceFrom':
        dispatch(filterPriceFrom(values.target.value));
        break;
      case 'priceUpTo':
        dispatch(filterPriceUpTo(values.target.value));
        break;
      default:
        throw new Error('Unknown field name');
    }
  };

  return (
    <div className="d-flex mb-3">
      <Formik
        initialValues={{ priceFrom: '', priceUpTo: '' }}
      >
        {() => (
          <Form onChange={handleChange}>
            <div className="font-weight-bold">Цена</div>
            <div className="form-group row mb-1">
              <label htmlFor="priceFrom" className="col-sm-2 col-form-label">От</label>
              <Field
                name="priceFrom"
                id="priceFrom"
                className="form-control form-control-sm col-sm-9 ml-1 "
                type="number"
                min="0"
              />
            </div>
            <div className="form-group row mb-1">
              <label htmlFor="priceUpTo" className="col-sm-2 col-form-label">До</label>
              <Field
                name="priceUpTo"
                id="priceUpTo"
                className="form-control form-control-sm col-sm-9 ml-1"
                type="number"
                min="0"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchFilterPrice;
