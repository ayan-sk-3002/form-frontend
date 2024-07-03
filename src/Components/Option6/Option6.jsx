import React, { useState } from 'react'
import './Option6.css'
const Option6 = ({setFormData}) => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
      setFormData((prevData) => ({
        ...prevData,
        transplantDate: selectedDate
      }));
    };
  
  return (
    <div className='option-6'>
        <input 
        type="date" 
        value={selectedDate} 
        onChange={handleDateChange} 
        className="date-input"
      />
    </div>
  )
}

export default Option6