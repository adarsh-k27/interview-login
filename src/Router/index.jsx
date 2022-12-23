import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from '../Components/Register'
import Login from '../Components/Login'
import Address from '../Components/Address'
function RouterWrapper() {
  return (
    <Routes>
      <Route path='/' element={<Address />} />
      <Route path='/user/login' element={<Login />} />
      <Route path='/user/register' element={<Register />} />
    </Routes>
  );
}

export default RouterWrapper;