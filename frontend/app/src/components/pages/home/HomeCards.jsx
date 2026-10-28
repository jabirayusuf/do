import React from 'react'
import './homeCards.css'
import { LuUsers } from "react-icons/lu";

const HomeCards = ({ title, count, description, icontag}) => {
  return (
   
        <div className='hcard col-md-3 col-sm-6'>
               <div className='hcard-body'>
                    <p className='hcard-title'>{title}</p>
                    <h4 className='hcard-text'>{count}</h4>
                    <p className='hcard-title'>{description}</p>
                </div>
               <div className='hcard-icon'>
                    {icontag}
               </div>

        </div>
   
  )
}

export default HomeCards