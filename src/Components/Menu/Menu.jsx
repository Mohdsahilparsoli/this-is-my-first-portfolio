
import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css"
//import img from "../../img/man.jpg"
const Menu =()=>{
return(<>
<section className="header" id="hed"></section>

<div className="container">
<div className="row">
<header>
<nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top ">
  <div className="container-fluid">
    <NavLink exact className="navbar-brand"  id="logo"  to={"/"}>zantech </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa fa-bars" aria-hidden="true"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto  mymenu">
        <li className="nav-item">
          <NavLink className="nav-link active"     activeClassName="selected"aria-current="page" to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/service"}>Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/about"}>About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to={"/portfolio"}>Portfolio</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " id="hire" to={"/contact"}>Hire me </NavLink>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

</header>
</div>

</div>
</>)
}
export default Menu;