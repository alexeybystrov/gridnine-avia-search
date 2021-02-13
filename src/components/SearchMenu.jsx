/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
// import {
//   Col, FormGroup, FormLabel, FormCheck,
// } from 'react-bootstrap';
import { sortBy } from '../slices/sortSlice.js';

const SearchMenu = () => {
  const dispatch = useDispatch();

  const handleSort = (values) => {
    console.log(values.target.value);
    dispatch(sortBy(values.target.value));
  };

  return (
    <div className="col-auto border position-fixed"/*  style={{ position: 'fixed' }} */>
      <div className="d-flex mb-3">
        <Formik
          initialValues={{ picked: '' }}
          // onSubmit={(values) => {
          //   console.log(values);
          // }}
          // onChange={handleSort}
        >
          {(/* { values } */) => (
            <Form>
              <div id="radio-group" className="font-weight-bold">Сортировать</div>
              <div onChange={handleSort} role="group" aria-labelledby="radio-group">
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
                {/* <div>
                  Picked:
                  {values.picked}
                </div> */}
              </div>
              {/* <button type="submit">Submit</button> */}
            </Form>
          )}
        </Formik>
      </div>

      <div className="d-flex mb-3">
        <Formik
          initialValues={{
            picked: '',
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              <div id="checkbox-group" className="font-weight-bold">Пересадки</div>
              <div role="group" aria-labelledby="checkbox-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <Field type="checkbox" name="picked" value="One" className="form-check-input" /* checked */ />
                    - 1 пересадка
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <Field type="checkbox" name="picked" value="two" className="form-check-input" />
                    - без пересадок
                  </label>
                </div>
                <div>
                  Picked:
                  {values.picked}
                </div>
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchMenu;
