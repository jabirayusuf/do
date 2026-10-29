import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import "./components/pages/home/home.css"
import HomeCards from './components/pages/home/HomeCards'
import { LuUsers } from "react-icons/lu";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { PiUploadSimpleBold } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { LuClipboardList } from "react-icons/lu";
const Session = () => {
  return (
   
      <div className='container-fluid'>
        <div className='row'>
            <Navbar/>
            <Sidebar/>

           {/* Main Content  */}
        <div className=' col-md-10 py-4 p-4 main-container'>
            <div className='inner-main-container'>
                {/* Header Div */}
              <div className='header-div'>
                <h3>Session</h3>
                <p>Here is an overview of academic records</p>
              </div>

              {/* CardsDiv section */}
              <div className='cards-div col-md-11 '>
                   
              </div>

                  <div className='session-student-div'>
                        <div className='current-session col-md-6'>
                            <form>
                              <h5>Create Session</h5>
                                <form className=' '>
                                    <label htmlFor='session'className='mb-2'>Current Session</label>
                                    <div className='form-group d-flex'>
                                        <input type='text' className='form-control' id='session' placeholder='2023/2024'/>
                                        <button className='btn btn-primary mx-2 form-control' >Create</button>
                                    </div>
                                </form>
                            </form>
                        </div>

                        <div className='current-session col-md-6'>
                          <div className='top'>
                            <h4>Academic Session</h4>
                          </div>
                          
                          <div className='student'>
                              <div className='student-caption'>
                                <h6>2025/2026</h6>
                                <small>2 Ang 2023 20:39</small>
                              </div>
                              <div>
                                 <small style={{ backgroundColor: 'lightgreen', color: 'black', padding: '5px',borderRadius: '5px' }}>Current</small>
                              </div>
                          </div>

                         
                         
                        </div>
                  </div>
              </div>

        </div>
      </div>
    </div>

  
    
  )
}

export default Session