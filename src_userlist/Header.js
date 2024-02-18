import React from 'react';

import {Link} from 'react-router-dom'; 

export const Header =()=>{
    return(
        <nav className="navbar"> 

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
           
                <Link className="nav-link"  to="/" >Home</Link>
                <Link className="nav-link"  to="/userlist" >My User</Link>
                <Link className="nav-link"  to="/about" >About Us</Link>
                <Link className="nav-link" to="/blog">Blog</Link>
                <Link className="nav-link" to="/contact">Contact us</Link>
          
            </li>
           
           
          </ul>
          
        </div>
      </nav>
    )
}