import React, { useState } from 'react';
import './App.css';
import 'h8k-components';
import medical_records from './medicalRecords';
import Search from './components/Search';
import Records from './components/Records';

const title = 'Patient Medical Records';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [records, setRecords] = useState([]);

  const handleShow = (index) => {
    setSelectedIndex(index);
    setRecords(medical_records[index].data);
  };

  return (
    <div className='App'>
      <h8k-navbar header={title} />
      <div className='content'>
        <Search onShow={handleShow} />
        {records.length > 0 && <Records records={records} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} setRecords={setRecords} medicalRecords={medical_records} />}
      </div>
    </div>
  );
};

export default App;
