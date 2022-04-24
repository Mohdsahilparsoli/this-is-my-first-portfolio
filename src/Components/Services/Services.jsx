import React from "react";
import Card from "../Card/Card";
import "./Service.css"
import Sdata from "../Sdata/Sdata";
import Head from "../../Components/Mainheding/Hading"

const Service =()=>{
    return(<>
    <section className="service">
    <Head 
        text1="My Awsome "
           text2 ="Services  "
       
    />

       
<div className="container-fluid mb-5">
       <div className="row">
         <div className="col-10 mx-auto ">
         <div className="row gy-4">
      {
          Sdata.map((curent,index)=>{     
            return <Card
                img ={curent.imgsrc}
                tittle={curent.tittle}
                details={curent.details}
            />
          })
      }
<p> </p>
</div>
</div>
             
         </div>
         </div>
    
         </section>

     </>)
}
export default Service