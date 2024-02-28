import React, { useEffect, useState } from 'react'
import {useNavigate, Link} from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email && 
      input.password === loggedUser.password
    ){
      localStorage.setItem('loggedin', true);
        navigate('/');
    } else {
      alert('Wrong Email or Password!');
    }
  };

  useEffect(()=>{
    const auth = localStorage.getItem('loggedin');
    if (auth) {
      navigate('/')
    }
  },[])
  return (
    <div className="user-form-main">
      <h2>Login</h2>
      <div className="user-form">
          <form onSubmit={handleLogin}>
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
                <button type="submit" className="btn edit">Login</button>
              </div>
              <p className="lnk">
                Don't have an account? <Link to="/register"><u>Register</u></Link>
              </p>
          </form>
      </div>
    </div>
  )
}

export default Login
