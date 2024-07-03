import React from 'react'
import { TiTick } from 'react-icons/ti'
import './Done.css'
const Done = ({formData}) => {
  return (
    <div className='done'>
         <TiTick  className='icon male'/>
         <p>Thank You</p>
    </div>
  )
}

export default Done