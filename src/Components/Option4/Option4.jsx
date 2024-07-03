import React, { useState } from 'react'
import './Option4.css'
const Option4 = ({setFormData}) => {
    const [value, setValue] = useState(0);
    const minValue = 0;
    const maxValue = 10;
  
    const handleChange = (event) => {
      setValue(event.target.value);
      setFormData((prevData) => ({
        ...prevData,
        duration: value
      }));
    };
  return (
    <div className='option-4'>
        <div className="duration">
            <h1> <span>{value}</span> Duration</h1>
        </div>
        <input 
        type="range" 
        min={minValue} 
        max={maxValue} 
        value={value} 
        onChange={handleChange} 
        
      />
      <div className="options">
        <p>Less than 1 year</p>
        <p>More than 10 years</p>
      </div>
    </div>
  )
}

export default Option4