import React from "react";
import { NavLink } from "react-router-dom";
import Man from "../../img/man.jpg"
import Progressbar from "../Progress/Progressbar";
import "./About.css"
import Pdf from  "../../pdf/resume.pdf"
import Head from "../../Components/Mainheding/Hading"
const About =()=>{
    return(<>
    <section className="about">
      <div className="container">
        <Head
          text1="About us"
           text2 ="My Awsome Exprince  "
        /> <br /><br /><br />
        <div className="row mx-auto">
            <div className="col-md-6 col-lg-6 ">
            <div className="profile ">
           <div className="imgsrc">
            <img src={Man} alt=" this is my iamge "  className="img-fluid "/></div>
          <div className="center">
          <h1 className=" text-center mt-5 " id="name" > Md Sahil</h1>
          <p className="text-center" style={{color:"#fff",fontWeight:'100'}}  > I'm a creative webdeveloper</p>
            <p className="text-left " style={{color:"#fff" , padding:"0px 15px"}} >I'm a Front-end web developer with a focus on the React js , but still exploring other technologies and frameworks
             that catch my interest! if you're looking 
            for a developer to add to your team, I'd love to hear from you!</p>
            <div className="icons text-center ">
              <a href="https://www.facebook.com/webdevelopparsoli" target="_blank"> <i class="fa-brands fa-2x fa-facebook"></i></a>
              <a href="https://github.com/Mohdsahilparsoli" target="_blank"> <i class="fa-brands fa-2x fa-github"></i></a>
              <a href="https://www.linkedin.com/in/md-sahil-839588227/" target="_blank"> <i class=" fa-2x fa-brands fa-linkedin"></i></a>
              <a href="https://twitter.com/sahilparsoli" target="_blank"><i class="fa-brands  fa-2x fa-twitter"></i> </a>
            </div>
          </div>            

            </div>
            </div>
            <div className="col-md-6 col-lg-6 mt-5  ">
            <h1 style={{color:"var(--black)"}}>My Skill </h1>
            <p> " Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains"   
            </p>
            <p> 
I gave my 100% in the last 2 years to get the same technical skill related to web programming I hope I will learn more skills in the upcoming years and my experience will be increased
</p>
           <Progressbar/>



          </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-6 col-lg-6 col-12">
              <h1>About me </h1>
              <p>I'm React js developer and I have deep knowledge of React js working as a freelancer from  2.
               year I started coding in 2020. 
               now  I have good experience  i have completed BCA   </p>
        <NavLink to={Pdf} target="_blank"><button className="btn1"> Download CV</button> </NavLink>   
            </div>
           { /*<div className="col-md-6 col-lg-6 col-12  ">
              <br /><h1>Details</h1>
              <ul>

                <li><h2> Name</h2></li>
                <li><h4>Md Sahil</h4></li>
                <li><h2>Age</h2></li>
                <li><h4>21</h4> </li>
                <li><h2> Degree</h2></li>
                <li><h4> BCA-Ignou</h4> </li>   
                <li><h2> Exprince</h2> </li>
                <li><h4> 1 year as Freelancer</h4></li>
                <li><h2>Loaction</h2></li>
                <li><h4> Vijay nagar  Ghaziabad  India</h4></li>
              </ul>
              </div>*/}
        </div>
      </div>
    </section>
      </>)
}
export default About