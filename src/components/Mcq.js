import React, { useEffect } from 'react'
import { useState } from 'react';

function Mcq(props) {
    const [ans, setans] = useState({});
    let array=Array.from(props.options);
   // console.log(props.options);
  
 
    const handler=(e)=>{
       setans(e.target.value);
       props.parentCallback(e.target.value,props.correct,props.index);
     //  setans({"color":"green"});
      // console.log(e.target.value);

    }

  return (
    <div className='container3'>
        <h6>
            {props.index+1}{"."+props.question}
        </h6>
        <div className='option'>
            {
              array.map((val,key)=>{
        return(<div key={key}><input type='radio' value={val} name={props.question} onChange={handler}/><b>{val}</b><br/>
                </div>)

              })
            }
        </div>
    </div>
  )
}

export default Mcq