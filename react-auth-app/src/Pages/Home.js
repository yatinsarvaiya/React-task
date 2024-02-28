import React from 'react'
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem('user'));
  const handleLogout = () => {
    localStorage.removeItem('loggedin');
    navigate('/login');
  }
  return (
    <div className="user-form-main">
      <h2>Hope page</h2>
      <p>Welcome <b>{userName.name}</b></p>
      <button 
      onClick={handleLogout}
      type="button" 
      className="btn"
      >Logout</button>
    </div>
  )
}

export default Home
