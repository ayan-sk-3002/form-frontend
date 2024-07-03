import React, { useState } from 'react'
import './Option5.css'
import { IoIosFemale, IoIosMale } from 'react-icons/io'
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import { RxCross1 } from 'react-icons/rx'

export const Option5 = ({setFormData}) => {
    const [gender, setGender] = useState("");

    const selectGender = (gender)=>{
        if(gender==="male"){
            setGender("male");
            setFormData((prevData) => ({
                ...prevData,
                transplantBefore: 'Yes'
              }));
        }else{
            setGender("female");
            setFormData((prevData) => ({
                ...prevData,
                transplantBefore: 'No'
              }));
        }
    }
  return (
    <div className='option-1'>
    <div onClick={()=>selectGender("female")} className={`options ${gender==="female"?"active":""}`}>
        <div className="icon-gender">
        <RxCross1 className='icon female'/>
        </div>
        <div className="radio-gender">
            
       {
        gender==="female"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>No</p> 
        </div>
    </div>
    <div onClick={()=>selectGender("male")} className={`options ${gender==="male"?"active":""}`}>
        <div className="icon-gender">
        <TiTick  className='icon male'/>
        </div>
        <div className="radio-gender">
            
        {
        gender==="male"?<FaRegCheckCircle/>: <FaRegCircle/>
       }   <p>Yes</p>
        </div>
    </div>
    </div>
  )
}
