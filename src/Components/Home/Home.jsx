import React from "react";
import './Home.css'
import { NavLink } from "react-router-dom";
import Pdf from "../../pdf/resume.pdf"
import myimg from "../../img/man.jpg"
import Footer from "../Footer/Footer";
import Service from "../Services/Services";
import About from "../About/About";
import Conact from "../../Components/Contact/Contact"
const Home =()=>{
    return(<>
    <section className="Home">
      <div className="container">
        <div className="row gx-5">
          <div className="col-12 col-md-6 col-lg-6">
           <div className="center mt-5">
            <p > If you hire me, I will not let you down, <br /> I will give my best for your company.  Welcome to my world</p>

            <h1 > I'm Md Sahil <br />
            <span> Front-end developer</span>
            <br /> Based in Ghaziabad 
             </h1>
             <div>
     
    </div>
            <p> I am expert in  React js , Angular js & Vue js .</p> <br />
            <NavLink className={"btn1"} to={Pdf}  target="_blank"> Dowload cv </NavLink>
            </div>
              </div>
          
          <div className="col-12 col-md-6 col-lg-6">
          <div className="imgcenter mt-5">         
             <img src={myimg} className ="img-fluid mb-5" alt="" />
          </div>

          </div>
          
           </div>
      </div>
    
</section>
<Service/>
<About/>
<Conact/>
<Footer/></>)
}
export default Home