import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css"
import Error1 from "../../img/Error1.png"
const Error =()=>{
    return(<>

<section className="error1">


    <div className="container">
        <div className="row">
            <div className="col-md-5  col-lg-5 col-12">
                <div className="content">
                    <h1> sorry! this page is not exist </h1>
                    <NavLink className={'btn1'} to={"/"}> Go back</NavLink>
                </div>
            </div>
            <div className="col-md-5  col-lg-5 col-12">
              <div className="content">
                <img src={Error1} alt=" 404 images " className="img-fluid img404" />
            
              </div>
            </div>
        </div>
    </div>
    
    </section>

    </>)
}
export default Error;