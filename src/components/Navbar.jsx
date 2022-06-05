import React from 'react'
import { Link } from 'react-router-dom';


function Navbar(){
return(
<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
     <img style={{ height:"50px"}}src="https://cdn.iconscout.com/icon/premium/png-64-thumb/spy-53-885567.png"></img>
      <Link className="navbar-brand" to="/">News-Spy</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item  mx-3">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
         <li className="nav-item mx-3">
          <Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/general">General</Link></li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/health">Health</Link></li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/sports">Sports</Link></li>
        <li className="nav-item mx-3">
          <Link className="nav-link" to="/technology">Technology</Link></li> 
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


);


}
export default Navbar;