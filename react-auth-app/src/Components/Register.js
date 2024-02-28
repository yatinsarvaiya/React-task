import React, { useState } from 'react';
import {useNavigate, Link} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(input));
    navigate('/login');
  }
  return (
    <div className="user-form-main">
      <h2>Create an Account</h2>
      <div className="user-form">
          <form onSubmit={handleSubmit}>
              <div className="user-form-inner">
                  <label>Name</label>
                  <input 
                  type='text' 
                  name="name" 
                  value={input.name} 
                  onChange={(e) => setInput({...input, [e.target.name] : e.target.value})} required
                  />
              </div>
              <div className="user-form-inner">
                  <label>Email</label>
                  <input 
                  type='email' 
                  name="email" 
                  value={input.email} 
                  onChange={(e) => setInput({...input, [e.target.name] : e.target.value})} required
                  />
              </div>
              <div className="user-form-inner">
                  <label>Password</label>
                  <input 
                  type='password' 
                  name="password" 
                  value={input.password} 
                  onChange={(e) => setInput({...input, [e.target.name] : e.target.value})} required
                  />
              </div>
              <div className="user-form-inner">
              <label></label>
                <button type="submit" className="btn edit">Register</button>
              </div>
              <p className="lnk">
                Have already an account? <Link to="/login"><u>Login Here</u></Link>
              </p>
          </form>
      </div>
    </div>
  )
}

export default Register
