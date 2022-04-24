import React from "react"
import "./Footer.css"
const d = new Date();
const year = d.getFullYear();

const Social =()=>{
    return (<>

<footer>
     <p className="text-center foter">
     ©{year} Copyright MyPortfolio. All Rights Reserved Designed by Md Sahil </p>
     
   </footer>
 
    </>)
}

export default Social