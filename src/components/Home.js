import React from 'react'
import './Home.css'
import v1 from '../files/v1.mp4'
import { useState,useEffect } from 'react'

function Home() {

let [a,setA]=useState(0)


  return (
    <div>
         <video  src={v1} className='vid1' loop
    autoPlay muted ></video>
    <h3 className='l1'>Welcome to Hyderabad's</h3>
    <h1 className='l2'>NEW RESORT CONVENTIONS</h1>
    <div className='content'>
    {/*card */}

    </div>
 <ul className='visits'>
    <li>{a}+ visits</li>
    <li>{a}+ visits</li>
    <li>{a}+ visits</li>
 </ul>
    </div>
  )
}

export default Home