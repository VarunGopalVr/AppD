import React from 'react'
import './Gallery.css'
import img1 from '../files/addD1.webp'
import img2 from '../files/bg.avif'
import img3 from '../files/bg2.avif'
import img4 from '../files/bg3.webp'
import img7 from '../files/hall1.jpeg'
import img8 from '../files/hall2.jpeg'
import img9 from '../files/hall3.jpeg'
import img10 from '../files/hall4.jpeg'
import img11 from '../files/hall5.jpeg'
import img12 from '../files/hall6.jpeg'
import img13 from '../files/hall7.jpeg'

function Gallery() {
  return (
    <div className='Gallery'>
      <img className='img' src={img1} alt="" width={226} height={226}/>
      <img src={img2} className='img' alt="" width={226} height={226}/>
      <img src={img3} alt="" className='img' width={226} height={226}/>
      <img src={img4} alt="" width={226} className='img' height={226}/>
      <img src={img7} alt="" width={226}  className='img' height={226}/>
      <img src={img8} alt="" width={226}  className='img' height={226}/>
      <img src={img9} alt="" width={226}  className='img' height={226}/>
      <img src={img10} alt="" width={226}  className='img' height={226}/>
      <img src={img11} alt="" width={226}  className='img' height={226}/>
      <img src={img12} alt="" width={226}  className='img' height={226}/>
      <img src={img13} alt="" width={226}  className='img' height={226}/>
      

    </div>
  )
}

export default Gallery