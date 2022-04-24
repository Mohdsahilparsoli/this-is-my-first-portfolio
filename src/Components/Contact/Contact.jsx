import React, { useRef } from "react";
import Phone from "../../img/contact.svg"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import "./Contact.css"
import emailjs from '@emailjs/browser';
import Head from "../../Components/Mainheding/Hading"

const Contact =()=>{
  

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('####', '######', form.current, '########')
      .then((result) => {
          console.log(result.text);
        alert(" thank-you your data has been sent to admin we will contact you very soon ! ")
      }, (error) => {
          console.log(error.text);
      });
    }
    return(<>
<section className="contact mb-5" >
  <div className="container">
  <Head 
     text1="Contact"
           text2 ="reply in 24x7  "
       
  />
    <div className="row d-flex justify-content-center">
      <div className="col-md-10 col-lg-10 col-12 ">     
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-6 mx-auto">
          <div id="heading">
            <h1> Get in Touch </h1>
            <p className="in">We are here for you ! How can i help you </p>
          </div>
          <form ref={form} onSubmit={sendEmail}>   
            <div class="mb-3 in">
  
  <input type="text" class="form-control" id="exampleFormControlInput1" name="user_name" placeholder="Enter your full name " autoComplete="off"/>
</div>
<div class="mb-3 in">
  
  <input type="email" class="form-control" id="exampleFormControlInput1" name="user_email" placeholder="Enter your email adress" autoComplete="off"/>
</div>

<div class="mb-3 in">
  
  <input type="number" class="form-control" id="exampleFormControlInput1" name="user_phone" placeholder="Enter your phone" autoComplete="off"/>
</div>
<div class="mb-3 in">
  <label for="exampleFormControlTextarea1" class="form-label in">Message us !</label>
  <textarea class="form-control in" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
</div>

{/*<input type="submit" value="send" className="btn1"  /> */}<button type="submit" value="send" className="btn1">Send </button>
</form>
 
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-5">
          
          <div className="mainimg ">
            <img src={Phone} className="img-fluid img404  " alt="" />
          </div>
          <div className="icon mt-5">
            <ul>
              <li>
                <span><LocationOnIcon/> </span>Vijay Nagar Ghaziabad  India
              </li>
              
              <li>
                <span><LocalPhoneIcon/> </span> 9818186876
              </li>
              <li>
                <span><EmailIcon/> </span>mohdsahilparsoli@gmail.com
              </li>
            </ul>
          </div>
            </div>
      
        </div>
      
        </div>
    </div>
 
  </div>

</section>

      </>)
}
export default Contact