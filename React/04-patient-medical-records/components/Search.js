import React, { useState } from 'react';
import medical_records from '../medicalRecords';

function Search({ onShow }) {
  const [tempIndex, setTempIndex] = useState('');

  const handleShow = () => {
    if (tempIndex === '') {
      alert('Please select a patient name');
      return;
    }
    // test uses "1" => first patient
    onShow(Number(tempIndex) - 1);
  };

  return (
    <div className='layout-row align-items-baseline select-form-container'>
      <div className='select'>
        <select data-testid='patient-name' value={tempIndex} onChange={(e) => setTempIndex(e.target.value)}>
          <option value='' disabled>
            Select Patient
          </option>
          {medical_records.map((patient, index) => (
            <option key={patient.id} value={index + 1}>
              {patient.data[0].userName}
            </option>
          ))}
        </select>
      </div>

      <button data-testid='show' onClick={handleShow}>
        Show
      </button>
    </div>
  );
}

export default Search;
