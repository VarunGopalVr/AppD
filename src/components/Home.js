import React, { useState } from 'react'
import './Home.css'
import v1 from '../files/v1.mp4'
import img from '../files/hall4.jpeg'
import Countup from 'react-countup'
import Scroll from 'react-scroll-trigger'

function Home() {

let [on,setOn]=useState(false)
let reverc=()=>{
  setOn(!on)
}
  return (
    <div>
        <div>
         <video  src={v1} className='vid1' loop
    autoPlay muted ></video>
    <h3 className='l1'>Welcome to Hyderabad's</h3>
    <h1 className='l2'>NEW RESORT CONVENTIONS</h1>



    <div className='content'>
    {/*card */}
        <div class="h">
            <div class="p">
                <h1>welcome to the city</h1>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sunt molestias quam modi minima facilis veritatis dolorem nulla nesciunt similique maxime eaque sequi, eveniet repellendus eligendi! Ex non temporibus suscipit, nam explicabo quaerat natus. Eligendi possimus ipsam et! Libero, dolorum magnam quibusdam aperiam omnis harum odio officia esse deserunt laboriosam. dolor sit amet consectetur adipisicing elit. Velit nisi hic saepe quos perspiciatis officia at doloremque vero facere nostrum cum corporis voluptatem, nulla dolore, similique rerum sequi quis. Neque exercitationem fugiat aliquid nostrum nesciunt natus autem, non libero? Eum et quibusdam dolorem consectetur reprehenderit, omnis dicta sequi vitae nobis. dolor, sit amet consectetur adipisicing elit. Mollitia saepe fugit ea officiis modi nesciunt ipsam aut facere, et voluptate?</p>
                </div>
            <div class="it">
                <img src={img} alt=""/>
               
            </div>
        </div>
        
      </div>

      <Scroll onEnter={reverc} onExit={reverc}>


        
 <ul className='visits'>
    
    <li>{on &&  <Countup start={0} end={1000} duration={4} delay={.1}/>}+ total no.of visits</li>
    <li>{on && <Countup start={0} end={80} duration={4} delay={.1}/>}+ visits/month</li>
    <li>{on && <Countup start={0} end={50} duration={4} delay={.1}/>}+ events</li>
    
 </ul>
 </Scroll>
    </div>
    </div>
  )
}

export default Home