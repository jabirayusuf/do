import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import "./components/pages/home/home.css"
import "./components/pages/student/student.css"
import axios from "axios";
import { useState,useEffect } from 'react';
import { data } from 'react-router-dom'

const Student = () => {
  let n = 0;
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/student")
        .then(res => setStudents(res.data))
        .catch(err => console.log(err))
    },[]);


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
                <h3>Students</h3>
                <p>Manage Student records and academic details</p>
              </div>

              {/* CardsDiv section */}
              <div className='cards-div col-md-11 '>
                   
              </div>

                   {/* Top form */}
              <div className='top-form'>
                      <form className="d-flex my-2 col-md-2" role="search">
                          <select className='form-control mx-2 col-'>
                              <option>Select class</option>
                          </select>
                      </form>
              </div>
                            {/* Students Table section */}
                <div className='student-tbl-div'>
                        <div className='student-tbl col-md-12'>
                               <table className="table table-responsive">
                                <thead>
                                  <tr>
                                    <th>S/N</th>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Othername</th>
                                    <th>Gender</th>
                                    <th>Date</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {students.map((person, index)=>{
                                    return <tr key={index}>
                                                <td>{++n}</td>
                                                <td>{person.firstname}</td>
                                                <td>{person.lastname}</td>
                                                <td>{person.othername}</td>
                                                <td>{person.gender}</td>
                                                <td>{person.date_of_birth}</td>
                                                <td>{person.email}</td>
                                                <td>{person.phone}</td>
                                                <td>{person.address}</td>
                                                <td>{person.status}</td>
                                          </tr>
                                      })}
                                  </tbody>
                          </table>
                                                        

                        </div>

                  </div>
              </div>

        </div>
      </div>
    </div>

  
    
  )
}

export default Student