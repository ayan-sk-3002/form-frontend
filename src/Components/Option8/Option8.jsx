import React, { useState } from 'react';
import './Option8.css'
const Option8 = ({setFormData}) => {
  const [medication, setMedication] = useState('');
  const [disease, setDisease] = useState('');

  const handleMedicationChange = (e) => {
    setMedication(e.target.value);
    setFormData((prevData) => ({
        ...prevData,
        medication: medication
      }));
  };

  const handleDiseaseChange = (e) => {
    setDisease(e.target.value);
    setFormData((prevData) => ({
        ...prevData,
        disease: disease
      }));
  };

  return (
    <div className='option-8'>
      <div className="options">
        <h4>Medications</h4>
        <input 
          type="text" 
          placeholder='Chronic diseases' 
          value={medication} 
          onChange={handleMedicationChange} 
        />
      </div>
      <div className="options">
        <h4>Are you taking any medications or do you have any disease?</h4>
        <input 
          type="text" 
          placeholder='Please specify your diseases' 
          value={disease} 
          onChange={handleDiseaseChange} 
        />
      </div>
    </div>
  );
};

export default Option8;
