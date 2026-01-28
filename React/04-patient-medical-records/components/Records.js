import React from 'react';

function Records({ records, selectedIndex, setSelectedIndex, setRecords, medicalRecords }) {
  const first = records[0];

  const handleNext = () => {
    const nextIndex = selectedIndex === medicalRecords.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(nextIndex);
    setRecords(medicalRecords[nextIndex].data);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className='patient-profile-container' id='profile-view'>
      <div className='layout-row justify-content-center'>
        <div id='patient-profile' data-testid='patient-profile' className='mx-auto'>
          <h4 id='patient-name'>{first.userName}</h4>
          <h5 id='patient-dob'>DOB: {first.userDob}</h5>
          <h5 id='patient-height'>Height: {first.meta.height} cm</h5>
        </div>

        <button className='mt-10 mr-10' data-testid='next-btn' onClick={handleNext}>
          Next
        </button>
      </div>

      <table id='patient-records-table'>
        <tbody data-testid='patient-table'>
          {records.map((record, index) => (
            <tr key={record.id}>
              <td>{index + 1}</td>
              <td>{formatDate(record.timestamp)}</td>
              <td>{record.diagnosis.name}</td>
              <td>{record.meta.weight}</td>
              <td>{record.doctor.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
