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
const Classes = () => {
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
                <h3>Class</h3>
                <p>Here is an overview of academic records</p>
              </div>

              {/* CardsDiv section */}
              <div className='cards-div col-md-11 '>
                   
              </div>

                    {/* quick action section */}
              <div className='quick-action '>
                      <div className='qdiv'>
                          <h4>Classes</h4>
                          <p>Common administrative tasks</p>
                      </div>

                    <div className="quick-action-btns col-md-6 ">
                            <button className='btn p-2'>
                                <PiUploadSimpleBold className='tag'/> 
                                Upload Results
                            </button>

                            <button className='btn p-2'>
                                <AiOutlineUserAdd className='tag'/> 
                                Add Student
                            </button>

                            <button className='btn p-2'>
                                <LuClipboardList className='tag'/> 
                                View Students
                            </button>
                            
                      </div>
                </div>
                  <div className='session-student-div'>
                        <div className='current-session col-md-6'>
                          <div className='top'>
                            <h4>Current session</h4>
                            <p>The active academic session</p>
                          </div>
                          <h4>2024/2025</h4>

                        </div>

                        <div className='current-session col-md-6'>
                          <div className='top'>
                            <h4>Resent Students</h4>
                            <p>Last registration</p>
                          </div>
                          
                          <div className='student'>
                              <div className='student-caption'>
                                <h6>Jabir Abdurrahman Yusuf</h6>
                                <small>BA/2024/23</small>
                              </div>
                              <div>
                                 <small>2 Ang 2023 20:39</small>
                              </div>
                          </div>

                          <div className='student'>
                                <div className='student-caption'>
                                    <h6>Abbas Abdurrahman Yusuf</h6>
                                    <small>BA/2024/23</small>
                                </div>
                                <div>
                                    <small>2 Ang 2023 20:39</small>
                                </div>
                          </div>
                          <div className='student'>
                                <div className='student-caption'>
                                    <h6>Abbas Abdurrahman Yusuf</h6>
                                    <small>BA/2024/23</small>
                                </div>
                                <div>
                                    <small>2 Ang 2023 20:39</small>
                                </div>
                          </div>
                          <div className='student'>
                                <div className='student-caption'>
                                    <h6>Abbas Abdurrahman Yusuf</h6>
                                    <small>BA/2024/23</small>
                                </div>
                                <div>
                                    <small>2 Ang 2023 20:39</small>
                                </div>
                          </div>
                          <div className='student'>
                                <div className='student-caption'>
                                    <h6>Abbas Abdurrahman Yusuf</h6>
                                    <small>BA/2024/23</small>
                                </div>
                                <div>
                                    <small>2 Ang 2023 20:39</small>
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

export default Classes