import React, { useState } from 'react';
import './Card.css';
import { Option1 } from '../Option1/Option1';
import { FaArrowLeft } from 'react-icons/fa';
import Option2 from '../Option2/Option2';
import Option3 from '../Option3/Option3';
import Option4 from '../Option4/Option4';
import { Option5 } from '../Option5/Option5';
import Option6 from '../Option6/Option6';
import Option7 from '../Option7/Option7';
import Option8 from '../Option8/Option8';
import Option9 from '../Option9/Option9';
import Done from '../Done/Done';

const Card = () => {
  const [formNumber, setFormNumber] = useState(0);
  const [formData, setFormData] = useState({
    gender:'',
    frontArea:'',
    crownArea:'',
    hairColor:'',
    duration:0,
    transplantBefore:'',
    transplantDate:'',
    dateForTransplant:'',
    medication:'',
    disease:'',
    name:'',
    email:'',
    phone:''
  });

  const headings = [
    'Please Choose your Gender',
    'How do you define your hair loss?',
    'What is your hair color?',
    'How long have you been experiencing hair loss?',
    'Hmm. Have you ever had a hair trasplant operation before?',
    'When did you have a hair transplant operation?',
    'When do you intend to have a hair transplant?',
    'Are you taking any medications or do you have any disease?',
    'Almost done. Whom should we deliver the results to?'
  ];

  const nextOption = () => {
    setFormNumber((prevFormNumber) => prevFormNumber + 1);
    console.log(formData);
  };

  const previousOption = () => {
    setFormNumber((prevFormNumber) => prevFormNumber - 1);
  };

  return (
    <div className='card'>
      <div className="upper-abs">
        <h2>{headings[formNumber]}</h2>
      </div>
      <div className="options-init"> 
        {formNumber === 0 && <Option1 setFormData={setFormData} />}
        {formNumber === 1 && <Option2 setFormData={setFormData} />}
        {formNumber === 2 && <Option3 setFormData={setFormData} />}
        {formNumber === 3 && <Option4 setFormData={setFormData} />}
        {formNumber === 4 && <Option5 setFormData={setFormData} />}
        {formNumber === 5 && <Option6 setFormData={setFormData} />}
        {formNumber === 6 && <Option7 setFormData={setFormData} />}
        {formNumber === 7 && <Option8 setFormData={setFormData} />}
        {formNumber === 8 && <Option9 setFormData={setFormData} />}
        {formNumber === 9 && <Done setFormData={setFormData} formData={formData}/>}
      </div>
      <button className={`continue-btn ${formNumber===9?"di-none":""}`} onClick={nextOption}>Continue</button>
      <FaArrowLeft onClick={previousOption} className={`prev ${formNumber===0?"di-none":""}`}/>
    </div>
  );
};

export default Card;
