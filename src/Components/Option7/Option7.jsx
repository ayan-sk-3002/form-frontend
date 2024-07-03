import React, { useState } from 'react'
import './Option7.css';

import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';
const Option7 = ({setFormData}) => {
    const [hairColor, setHairColor] = useState('');

    const setHairColorFun = (color) => () => {
      setHairColor(color);
      setFormData((prevData) => ({
          ...prevData,
          dateForTransplant: color
        }));
    };
  
    return (
      <div className='option-3'>
        <div onClick={setHairColorFun("As soon as Possible")} className={`options ${hairColor === "As soon as Possible" ? "active" : ""}`}>
          {hairColor === "As soon as Possible" ? <FaRegCheckCircle /> : <FaRegCircle />} <p>As soon as Possible</p>
        </div>
        <div onClick={setHairColorFun("Within 3 months")} className={`options ${hairColor === "Within 3 months" ? "active" : ""}`}>
          {hairColor === "Within 3 months" ? <FaRegCheckCircle /> : <FaRegCircle />} <p>Within 3 months</p>
        </div>
        <div onClick={setHairColorFun("in 1year")} className={`options ${hairColor === "in 1year" ? "active" : ""}`}>
          {hairColor === "in 1year" ? <FaRegCheckCircle /> : <FaRegCircle />} <p>in 1year</p>
        </div>
        <div onClick={setHairColorFun("I haven't planned it yet")} className={`options ${hairColor === "I haven't planned it yet" ? "active" : ""}`}>
          {hairColor === "I haven't planned it yet" ? <FaRegCheckCircle /> : <FaRegCircle />} <p>I haven't planned it yet</p>
        </div>
      </div>
    );
  
}

export default Option7