import React, { useEffect  } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import {useNavigate } from 'react-router-dom';

function Star() {
    const {id}=useParams();
    const [product, setproduct] = useState({})
    const nav=useNavigate();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>
        {
            setproduct(res.data);
        }
        ).then(()=>
        console.log(product));

    },[]);
    const handler =(e)=>
    {
      e.preventDefault();
      nav('/');
    }

  return (
    <div>
        <div className='container'>
          <div className='row'>
            <div className='col-8'><h2>fake store</h2></div>
            <div className='col-4'><button className='btn btn-light' style={{"marginLeft":"25px","borderRadius":"20px"}} onClick={handler}>home</button>
            <button className='btn btn-light' style={{"marginLeft":"25px","borderRadius":"20px"}} >About</button>
            </div>
            
        </div>
        <div className='container1'>

        <div className="card mb-3" style={{"max-width": "540px"}}>
           <div className="row g-0">
              <div className="col-md-4">
                 <img src={product.image} class="img-fluid rounded-start" alt="..."/>
              </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p> Price:<b> ${product.price}</b></p>
      <button className="btn btn-primary" style={{"marginRight":"100px"}}> placeOrder</button>
      <button className="btn btn-primary"> AddCart</button>
      </div>
</div>
  </div>
</div>
            </div>
            </div>

    </div>
  )
  }

export default Star