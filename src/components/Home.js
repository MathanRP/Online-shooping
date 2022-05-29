import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
    const [data, setdata] = useState([]);
    const [categories, setcategories] = useState('select');
    const [items, setitems] = useState([])
    let path=useNavigate();
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/categories`).then(res=>
        setdata(res.data)
        ).then(()=>{
         
            console.log(data);
           
        })

      
    }, [Home])
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/category/${categories}`).then((res)=>
      {
        setitems(res.data);

      }).then(()=>{
        console.log(items);
      })
      
    }, [categories])
    useEffect(() => {
     console.log(items)
    }, [items])
    useEffect(() => {
      axios.get(`https://fakestoreapi.com/products`).then((res)=>
      {
        setitems(res.data);
      }
      )
    }, [Home])
    const handler=(e)=>{
      e.preventDefault();
      console.log(e.target.value);
      path(`/product/${e.target.value}`)


    }
    
    
    
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>
          <h1>fake store</h1>
        </div>
        <div className='col-4'>
     
<select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={(e)=>setcategories(e.target.value)}>
  {
    data.map((res)=>{
    return(<option>{res}</option>)
    }
    )
} 
</select>

        </div>
        

      </div>
    <div className='row'>
      <div className='col-12'>
        {items.map((res)=>
      {
        return(
          <div className="card " style={{"width":"18rem"}}>
          <img src={res.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-title">{res.title}</p>
            <p className="card-text">{}
            <b>{"$"+res.price}</b>
            <br/>
            {/* <b style={{"color":"blue"}}>{"User Rating "+res.rating.rate}</b> */}
            </p>
          </div>
          <div className='rate'>
          {
            [...Array(Math.round(res.rating.rate))].map((i)=>{
              return(<img src='./star.png'></img>)
            })
          }
          </div>
          <button  className="btn btn-primary" onClick={handler} value={res.id}>Buy Now.....</button>

        </div>
        );
      })}
      </div>
    </div>
        
  </div>
  )
}

export default Home