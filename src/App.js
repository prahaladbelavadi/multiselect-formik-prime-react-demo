import React, { useState } from 'react';
import './App.css';
import { MultiSelect } from 'primereact/multiselect';

function App() {
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  const [selectedCities, setSelectedCities] = useState([]);

  return (
    <div className="App">
      <MultiSelect
        display="chip"
        optionLabel="name"
        value={selectedCities}
        options={cities}
        placeholder="Select a city"
        onChange={(e) => setSelectedCities(e.value)}
      />
    </div>
  );
}

export default App;
