import React, { useState } from 'react';
import './App.css';

import { MultiSelect } from 'primereact/multiselect';

import { useFormik } from 'formik';

function App() {
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  const [selectedCities, setSelectedCities] = useState([]);

  const formik = useFormik({
    initialValues: {
      multiselectField: null,
    },
    validate: (data) => {
      let errors = {};

      if (!data.multiselectField) {
        errors.multiselectField = 'This field is required';
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  const multiselectFieldHandler = (e) => {
    console.log(e);
    formik.handleChange(e);
  };

  return (
    <div className="App">
      <div className="left">
        <h3>Normal Multiselect</h3>
        <MultiSelect
          display="chip"
          id="multiselectField"
          name="multiselectField"
          optionLabel="name"
          value={selectedCities}
          options={cities}
          placeholder="Select a city"
          onChange={(e) => setSelectedCities(e.value)}
        />
        <div style={{ marginTop: '2rem' }}>
          {JSON.stringify(selectedCities)}
        </div>
      </div>

      <div className="right">
        <h3>Formik Multiselect</h3>

        <form>
          <MultiSelect
            display="chip"
            id="multiselectField"
            name="multiselectField"
            optionLabel="name"
            value={formik.values.multiselectField}
            options={cities}
            placeholder="Select a city"
            onChange={multiselectFieldHandler}
            // onChange={(e) => setSelectedCities(e.value)}
          />
          {getFormErrorMessage('multiselectField')}
          <div style={{ marginTop: '2rem' }}>
            {JSON.stringify(formik.values)}
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
