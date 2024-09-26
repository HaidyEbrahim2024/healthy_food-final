import React from 'react'
import "./heromain.scss";
import slider from "./slider-1.webp";

export default function Heromain() {
  return (
    <div className="meals col-12" >
    <img src={slider}className=' img col-12' />
  <div className='text'>
    <h3>Welcome to</h3>
    <h1> Meals oF Obrien Shopping</h1>
  </div>
  </div>
  )
}
