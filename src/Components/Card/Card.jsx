import React from 'react'
import Reacticone from "../../img/react.svg"
import Button from '@mui/material/Button';
import "./Card.css"
const Card = (props) => {
  return (
    <>
    <div className="col-md-4 col-10 mx-auto">
           <div class="card" >
  <img src={props.img} class="card-img-top" alt="React services icons "/>
  <div class="card-body">
    <h5 class="card-title">{props.tittle}</h5>
    <p class="card-text">{props.details}</p>
    <a href="#" class="btn2 ">
    <Button variant="contained" >Read More</Button>
    
    </a>
  </div>
</div>
</div>
    </>
  )
}

export default Card