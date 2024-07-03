import React, { useState } from 'react'
import './Option1.css'
import { IoIosFemale, IoIosMale } from 'react-icons/io'
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa'

export const Option1 = ({setFormData}) => {
    const [gender, setGender] = useState("");

    const selectGender = (gender)=>{
        if(gender==="male"){
            setGender("male");
            setFormData((prevData) => ({
                ...prevData,
                gender: 'Man'
              }));
        }else{
            setGender("female");
            setFormData((prevData) => ({
                ...prevData,
                gender: 'Women'
              }));
        }
    }
  return (
    <div className='option-1'>
    <div onClick={()=>selectGender("female")} className={`options ${gender==="female"?"active":""}`}>
        <div className="icon-gender">
        <IoIosFemale className='icon female'/>
        </div>
        <div className="radio-gender">
            
       {
        gender==="female"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>Women</p> 
        </div>
    </div>
    <div onClick={()=>selectGender("male")} className={`options ${gender==="male"?"active":""}`}>
        <div className="icon-gender">
        <IoIosMale  className='icon male'/>
        </div>
        <div className="radio-gender">
            
        {
        gender==="male"?<FaRegCheckCircle/>: <FaRegCircle/>
       }   <p>Man</p>
        </div>
    </div>
    </div>
  )
}
