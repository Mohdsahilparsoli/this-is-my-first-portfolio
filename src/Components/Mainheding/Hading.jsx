import React from 'react'

const Hading = (props) => {
  return (
  <>
       <div className="my-5">        
        <h1 className="text-center hed"> {props.text1}<br /> <span style={{color:"var(--primary-color)"}}> {props.text2}</span> </h1>
        
        </div>
  </>
  )
}

export default Hading