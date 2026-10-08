import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<div>Base Page</div>} />
      <Route path='/login' element={<div>Login Page</div>} />
      </Routes>
      </BrowserRouter>
      <NavBar/>
      <div>Hello</div>
    </>
  )
}

export default App
