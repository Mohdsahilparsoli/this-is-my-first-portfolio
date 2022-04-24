import React from 'react'
import Bar from '../Bar/Bar';
import "./Progress.css"
import LinearProgress from '@mui/material/LinearProgress';
const Progressbar = () => {
    
const progress=10
  return (
    <>
        <div className="progressbar">
        {
            Bar.map((curent,index)=>{
                return(<>
                    <span className='skill'>{curent.name}</span>
                    <LinearProgress variant="determinate" value={curent.value} />
                </>)
            })
        }
          
        </div>
    </>
  )
}

export default Progressbar