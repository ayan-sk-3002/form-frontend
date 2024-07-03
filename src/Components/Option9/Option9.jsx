import React, { useState } from 'react';
import './Option9.css'
const Option9 = ({setFormData}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
    setFormData((prevData) => ({
        ...prevData,
        name: name
      }));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setFormData((prevData) => ({
        ...prevData,
        email: email
      }));
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setFormData((prevData) => ({
        ...prevData,
        phone: phone
      }));
  };

  return (
    <div className='option-8'>
      <div className="options">
        <h4>Name and Surname</h4>
        <input 
          type="text" 
          placeholder='Chronic diseases' 
          value={name} 
          onChange={handleName} 
        />
      </div>
      <div className="options">
        <h4>E-Mail Address
        </h4>
        <input 
          type="email" 
          placeholder='Please specify your diseases' 
          value={email} 
          onChange={handleEmail} 
        />
      </div>
        <div className="options">
        <h4>Your Telephone Number
        </h4>
        <input 
          type="text" 
          placeholder='Please specify your diseases' 
          value={phone} 
          onChange={handlePhone} 
        />
      </div>
    </div>
  );
};

export default Option9;
