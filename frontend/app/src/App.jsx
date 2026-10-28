import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home'
import Student from './Student'
import Result from './Result'
import Class from './Class'
import Term from './Term'
import Users from './Users'
import Classes from './Classes'
import Session from './Session'
import Subject from './Subject'
import UploadResult from './UploadResult'



const App = () => {
  return (
   
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/result" element={<Result/>}/>
            <Route path="/class" element={<Class/>}/>
            <Route path="/term" element={<Term/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/classes" element={<Classes/>}/>
            <Route path="/session" element={<Session/>}/>
            <Route path="/subject" element={<Subject/>}/>
            <Route path="/upload-result" element={<UploadResult/>}/>
            
        </Routes>
    </BrowserRouter>

    
  )
}

export default App