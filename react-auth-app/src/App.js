import React from 'react';
import './Style.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Pages/Home';
import ProtectedRoutes from './Services/ProtectedRoutes';
const App = () => {
  return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
        </BrowserRouter>
      </>
      )
}

export default App