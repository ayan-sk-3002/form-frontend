import React, { useState } from 'react';
import './Option3.css'
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';

const Option3 = ({setFormData}) => {
  const [hairColor, setHairColor] = useState('');

  const setHairColorFun = (color) => () => {
    setHairColor(color);
    setFormData((prevData) => ({
        ...prevData,
        hairColor: color
      }));
  };

  return (
    <div className='option-3'>
      <div onClick={setHairColorFun("Blond")} className={`options ${hairColor === "Blond" ? "active" : ""}`}>
        {hairColor === "Blond" ? <FaRegCheckCircle /> : <FaRegCircle />} <p>Blond</p>
      </div>
      <div onClick={setHairColorFun("Brown")} className={`options ${hairColor === "Brown" ? "active" : ""}`}>
        {hairColor === "Brown" ? <FaRegCheckCircle /> : <FaRegCircle />} <p>Brown</p>
      </div>
      <div onClick={setHairColorFun("Ginger")} className={`options ${hairColor === "Ginger" ? "active" : ""}`}>
        {hairColor === "Ginger" ? <FaRegCheckCircle /> : <FaRegCircle />} <p>Ginger</p>
      </div>
      <div onClick={setHairColorFun("Black")} className={`options ${hairColor === "Black" ? "active" : ""}`}>
        {hairColor === "Black" ? <FaRegCheckCircle /> : <FaRegCircle />} <p>Black</p>
      </div>
    </div>
  );
}

export default Option3;
