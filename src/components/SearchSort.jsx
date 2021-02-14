/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { sortBy } from '../slices/sortSlice.js';

const SearchSort = () => {
  const dispatch = useDispatch();

  const handleChange = (values) => {
    dispatch(sortBy(values.target.value));
  };

  return (
    <div className="d-flex mb-3">
      <Formik
        initialValues={{ picked: '' }}
      >
        {() => (
          <Form onChange={handleChange}>
            <div id="radio-group" className="font-weight-bold">Сортировать</div>
            <div role="group" aria-labelledby="radio-group">
              <div className="form-check">
                <label className="form-check-label">
                  <Field type="radio" name="picked" value="ascendingPrice" className="form-check-input" /* checked */ />
                  - по возрастанию цены
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <Field type="radio" name="picked" value="descendingPrice" className="form-check-input" />
                  - по убыванию цены
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <Field type="radio" name="picked" value="ascendingTime" className="form-check-input" />
                  - по времени в пути
                </label>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchSort;
