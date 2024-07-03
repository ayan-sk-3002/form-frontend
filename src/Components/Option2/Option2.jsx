import React, { useState } from 'react'
import './Option2.css'
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa'
const Option2 = ({setFormData}) => {
  const [frontHair, setFrontHair] = useState('');
  const [crowntHair, setCrowntHair] = useState('');

  const setFrontHairData = (front) => {
    setFormData((prevData) => ({
      ...prevData,
      frontArea: front
    }));
  }
  const setCrowntHairData = (front) => {
    setFormData((prevData) => ({
      ...prevData,
      crownArea: front
    }));
  }

const selectFrontHair = (front) =>{
  
  setFrontHairData(front)
  if(front==="extensive"){
    setFrontHair("extensive")

  }
  else if(front==="light"){
    setFrontHair("light")
  }
  else if(front==="light-medium"){
    setFrontHair("light-medium")
  }
  else if(front==="medium"){
    setFrontHair("medium")
  }
  else if(front==="medium-extensive"){
    setFrontHair("medium-extensive")
  }
  else{
    setFrontHair("none")
  }
}


const selectCrowntHair = (front) =>{
  setCrowntHairData(front)
  if(front==="extensive"){
    setCrowntHair("extensive")
  }
  else if(front==="light"){
    setCrowntHair("light")
  }
  else if(front==="light-medium"){
    setCrowntHair("light-medium")
  }
  else if(front==="medium"){
    setCrowntHair("medium")
  }
  else if(front==="medium-extensive"){
    setCrowntHair("medium-extensive")
  }
  else{
    setCrowntHair("none")
  }
}

  return (
    <div className='option-2'>
      <p className='title'>Choose your hair loss in the frontal area.</p>
      <div className="front">
      
        {/*  */}
      <div onClick={()=>selectFrontHair("none")} className={`options ${frontHair==="none"?'active':""}` }>
      {
        frontHair==="none"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>None</p> 
      </div>
      {/*  */}
        {/*  */}
      <div onClick={()=>selectFrontHair("light")} className={`options ${frontHair==="light"?'active':""}` }>
      {
        frontHair==="light"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>Light</p> 
      </div>
      {/*  */}
        {/*  */}
      <div onClick={()=>selectFrontHair("light-medium")}  className={`options ${frontHair==="light-medium"?'active':""}` }>
      {
        frontHair==="light-medium"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>Light Medium</p> 
      </div>
      {/*  */}
        {/*  */}
      <div  onClick={()=>selectFrontHair("medium")} className={`options ${frontHair==="medium"?'active':""}` }>
      {
        frontHair==="medium"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>Medium</p> 
      </div>
      {/*  */}
        {/*  */}
      <div onClick={()=>selectFrontHair("medium-extensive")}  className={`options ${frontHair==="medium-extensive"?'active':""}` }>
      {
        frontHair==="medium-extensive"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>Medium Extensive</p> 
      </div>
      {/*  */}
        {/*  */}
      <div onClick={()=>selectFrontHair("extensive")}  className={`options ${frontHair==="extensive"?'active':""}` }>
      {
        frontHair==="extensive"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>Extensive</p> 
      </div>
      {/*  */}
      </div>
       <p className='title'>Choose your hair loss in the crown area.</p>
      <div className="crown front">
      
        {/*  */}
        <div
  onClick={() => selectCrowntHair("none")}
  className={`options ${crowntHair === "none" ? 'active' : ''} ${frontHair === "none" ? 'dis-none' : ''}`}
>  {
        crowntHair==="none"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>None</p> 
      </div>
      {/*  */}
        {/*  */}
      <div onClick={()=>selectCrowntHair("light")} className={`options ${crowntHair==="light"?'active':""}` }>
      {
        crowntHair==="light"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>Light</p> 
      </div>
      {/*  */}
        {/*  */}
      <div onClick={()=>selectCrowntHair("light-medium")}  className={`options ${crowntHair==="light-medium"?'active':""}` }>
      {
        crowntHair==="light-medium"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>Light Medium</p> 
      </div>
      {/*  */}
        {/*  */}
      <div  onClick={()=>selectCrowntHair("medium")} className={`options ${crowntHair==="medium"?'active':""}` }>
      {
        crowntHair==="medium"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>Medium</p> 
      </div>
      {/*  */}
        {/*  */}
      <div onClick={()=>selectCrowntHair("medium-extensive")}  className={`options ${crowntHair==="medium-extensive"?'active':""}` }>
      {
        crowntHair==="medium-extensive"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>Medium Extensive</p> 
      </div>
      {/*  */}
        {/*  */}
      <div onClick={()=>selectCrowntHair("extensive")}  className={`options ${crowntHair==="extensive"?'active':""}` }>
      {
        crowntHair==="extensive"?<FaRegCheckCircle/>: <FaRegCircle/>
       } <p>Extensive</p> 
      </div>
      {/*  */}
      </div>
    </div>
  )
}

export default Option2