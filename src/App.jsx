import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import city from './image/city.jpg'


function App() {
 const [rendom, setrendom]=useState("")

  const fetchapi=async()=>{
    
    const response=await axios.get(	"https://api.adviceslip.com/advice")
     setrendom(response.data.slip.advice)
  }
  useEffect(()=>{
 fetchapi()
  },[])
 

  return (
    <div>
       <div className='nav'>
     <h1>GET GOOD ADVICE WITH ONE CLICK</h1>
    
    </div>
    <div className='app' style={{ backgroundImage: `url(${city})` }}>
      
      <div className='card'>
    <div className='heading'>
      {rendom}
      </div>
    <button className='button' onClick={() => window.location.reload()}>Give me Advice</button>
    </div>
    </div>
    </div>
  )
}

export default App