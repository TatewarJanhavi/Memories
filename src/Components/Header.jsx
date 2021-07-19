import React from "react";
import { Link} from "react-router-dom";
import './Login.css'
import { useLocation } from 'react-router-dom'

const Header =(props) =>{
  const location = useLocation();
   const loc=location.pathname;
    return (
      <>
  
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div >
       
      {!loc.includes("memories")?
      <>
      <Link className="navbar-brand nav_link" to="/signup">SignUp</Link>
      <Link className="navbar-brand nav_link" to="/login">Login </Link>
      <Link className="navbar-brand nav_link" to="/">Home</Link>
      </>
      :
      <Link className="navbar-brand nav_link" to="/">LogOut</Link>}
      </div>
    </div> 
  </nav>
</>
    )

}

export default Header;