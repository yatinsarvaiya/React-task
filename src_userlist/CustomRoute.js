import React from 'react'
import { Routes,Route } from "react-router-dom"; 
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import UserList from './userList';
export const CustomRoute=() => {
  return (
    <>
      
      <Routes> 
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/userList" element={<UserList/>} />
      </Routes>
       
    </> 
  )
}