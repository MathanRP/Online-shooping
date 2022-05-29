import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Mcq from './Mcq';


function CreatingQuiz() {
  const [selectval, setselectval] = useState('');
  const [arr, setarr] = useState([])
  var url='https://opentdb.com/api.php?amount=20&category=21';
  var list=Array(21).fill(0);
  var count=0;
 useEffect(()=>{
   async function fun()
   {
     const res=await axios.get(url);
    // setques(res.data);
     setarr(res.data.results);
    // console.log(arr);

   }
   fun()

 },[url])
 const handler=(e,correct,index)=>{
   var t=e;
    if(t===correct)
    {
      list[index]=1;
    }
    else
    list[index]=0;

    console.log(list);
   
 } 
 const score=()=>{
   count=0;
   for(var i=0;i<list.length;i++)
   {
      if(list[i]===1)
      {
        count++;
      }
   }
   alert(count);
  

 }
  return (
    <div className='container'>
        <div className='row'>
        <div className='col-8'><h1>quiz app</h1></div>
        <div className='col-4'></div>
        </div>
        <div className='container2'>
          {
            arr.map((val,index)=>{
              const{question,type,correct_answer,incorrect_answers}=val
              //incorrect_answers.push(correct_answer);
              let array=Array.from(incorrect_answers);
              array.push(correct_answer);
                for (var i = array.length - 1; i>=0; i--) {
 
                  // Generate random number
                  var j = Math.floor(Math.random() * (i + 1));
   
                  var temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
              }
              return(<div key={index}>
                {
                  <Mcq question={question} index={index} options={array} parentCallback={handler} correct={correct_answer}/>
                  
                }
              
              </div>)
            })
          }
         
        </div>
        <div className='button1'> 
         <button className='btn btn-primary' onClick={score}>submit</button></div>
    </div>
  )
}

export default CreatingQuiz