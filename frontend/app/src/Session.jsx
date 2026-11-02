import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import "./components/pages/home/home.css"
import "./components/pages/session/session.css"
import { useState,useEffect } from 'react';
import axios from "axios";
const Session = () => {
      let n = 0;
     const [session, setSession] = useState([]);
        useEffect(()=>{
            axios.get("http://localhost:5000/session")
            .then(res => setSession(res.data))
            .catch(err => console.log(err))
        },[]);
        function visibleTbl(){}
          // form to Create Session
        const [values, setValues] = useState({
              name: "",
              start_date: "",
              end_date: ""
            })

          function handleSubmit(e){
                e.preventDefault()
                axios.post("http://localhost:5000/session",values)
                .then(res =>res.json({"Message":"Session created successefully"}))
                .catch(err => console.log(err))
          }
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

             

                  <div className='session-student-div col-md-12 col-sm-12'>
                        <div className='session-form col-md-2 col-sm-12'>
                            
                              <h6>Academic Session</h6>
                                <form className=' ' onSubmit={handleSubmit}>
                                    <div>
                                       
                                    </div>
                                    
                                    <div className='form-group mb-2'>
                                        <label htmlFor='session'className='mb-2'>Session</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='session' 
                                            placeholder='eg 2023/2024'
                                            onChange={e => setValues({...values, name: e.target.value})}
                                        />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label htmlFor='start_date'className='mb-2'>Start Date</label>
                                        <input
                                              type='date'
                                              className='form-control'
                                              id='start_date'
                                              placeholder='eg 2023/2024'
                                              onChange={e => setValues({...values, start_date: e.target.value})}
                                        />
                                    </div>
                                    
                                    <div className='form-group mb-2'>
                                        <label htmlFor='end_date'className='mb-2'>End Date</label>
                                        <input
                                            type='date'
                                            className='form-control'
                                            id='end_date'
                                            placeholder='eg 2023/2024'
                                            onChange={e => setValues({...values, end_date: e.target.value})}
                                          />
                                    </div>
                                    
                                     <button className='btn btn-primary mt-4 form-control' >Create</button>
                                </form>
                          
                        </div>

                        <div className='session-table col-md-10  col-lg-9  col-sm-12'>
                            <div className='top'>
                                <h4>Academic Session</h4>
                            </div>
                          
                          <div className='tbl-container'>
                              <table className="table table-responsive">
                                  <thead>
                                    <tr>
                                      <th>S/N</th>
                                      <th>Session</th>
                                      <th>Start</th>
                                      <th>End</th>
                                      <th>Created</th>
                                      <th>Updated</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                     {session.map((s, index)=>{
                                      return <tr key={index} className='py-0'>
                                              <td>{++n}</td>
                                              <th>{s.name}</th>
                                              <td>{s.start_date}</td>
                                              <td>{s.end_date}</td>
                                              <td>{s.created_at}</td>
                                              <td>{s.updated_at}</td>
                                              <td>{s.is_current}</td>
                                              <td>
                                                <button className="btn btn-primary mx-2">Edit</button>
                                                <button className="btn btn-danger">Delete</button>
                                            </td>
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
    </div>

  
    
  )
}

export default Session