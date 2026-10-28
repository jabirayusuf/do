import React from 'react'
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { LuUsers } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { GiTrophyCup } from "react-icons/gi";
import { GoBook } from "react-icons/go";
import { LuCalendarDays } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { RiSchoolLine } from "react-icons/ri";

import './sidebar.css'

const Sidebar = () => {
  return (

   
            <div className='sidenav col-md-2 col-sm-2 bg-white'>
                <ul>
                    <Link to="/" className='nav-link active'>
                        <li className=''>
                            <span className=' '><MdOutlineDashboard />  Dashboard</span>
                        </li>
                    </Link>

                    <Link to="/student" className='nav-link'>
                        <li className=''>
                            <span className=' '><LuUsers /> Students</span>
                        </li>
                    </Link>

                    <Link to="/result" className='nav-link'>
                        <li className=''>
                            <span className=' '><TbReportAnalytics /> Results</span>
                        </li>
                    </Link>

                    <Link to="/upload-result" className='nav-link'>
                        <li className=''>
                             <span className=' '><FiUpload /> Upload Results</span>
                        </li>
                    </Link>
                    
                    <Link to="/class" className='nav-link'>
                        <li className=''>
                             <span className=' '><GiTrophyCup />  Class Report</span>
                        </li>
                    </Link>

                    <Link to="/subject" className='nav-link'>
                        <li className=''>
                              <span className=' '><GoBook />  Subjects</span>
                        </li>
                    </Link>

                    <Link to="/session" className='nav-link'>
                        <li className=''>
                              <span className=' '><LuCalendarDays />  Sessions</span>
                        </li>
                    </Link>

                    <Link to="/term" className='nav-link'>
                        <li className=''>
                               <span className=' '><FaListCheck />  Terms</span>
                        </li>
                    </Link>

                    <Link to="/classes" className='nav-link'>
                        <li className=''>
                             <span className=' '><RiSchoolLine />  Classes</span>
                        </li>
                    </Link>

                    <Link to="/users" className='nav-link'>
                        <li className=''>
                             <span className=' '><IoKeyOutline />  Users</span>
                        </li>
                    </Link>
               
                   
                </ul>
            </div>
      
  )
}

export default Sidebar