import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import logo from './img/logo.png'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='nav p-2 '>
      
            <div className='logo-and-caption'>
                <img  src={logo} className="img-logo"/>
                <h4>Brilliant Acadamy</h4>
            </div>
                

                <div className='px-4 right'>
                    <FaUser /> Administrator
                    <button className='px-2 '>  Logout <MdLogout /></button>
                </div>
        
    </div>
  )
}

export default Navbar