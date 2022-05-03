import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav>
      <h1>Stranger's Things</h1>
      <div>
  
        <Link to="/">Home</Link>
        <Link to="/Post">Post</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/NewPost">New Post</Link>
        <Link to="/EditPost">Edit Post</Link>
      
     </div>
    </nav>
  )
}

export default NavBar;
