import React from 'react'
import './ServicesAndFacilities.css'
import img1 from '../files/hall1.jpeg'
import img2 from '../files/hall2.jpeg'
import img3 from '../files/hall3.jpeg'
import img4 from '../files/hall4.jpeg'
import img5 from '../files/hall5.jpeg'
import img6 from '../files/hall6.jpeg'

function ServicesAndFacilities() {
  return (
    <div className='div1'>
      <div className='div'>
        <div className='p1'>
        <img className='img' src={img2} alt="" />
        </div>
        <div className='p2'>
        <h1>corporate</h1>
        <p>Indian weddings are traditionally multi-day affairs, and involve many intricate ceremonies of sangeet, mehendi, cocktail parties, receptions and the marriage itself, we have the space to ensure that every wedding is a memorable one and each moment is cherished.</p>
        </div>
      </div>
      <div className='div2'>
      <div className='p2'>
        <h1>indian weddings</h1>
        <p>Indian weddings are traditionally multi-day affairs, and involve many intricate ceremonies of sangeet, mehendi, cocktail parties, receptions and the marriage itself, we have the space to ensure that every wedding is a memorable one and each moment is cherished.</p>
        </div>
        <div className='p1'>
        <img src={img1}className='img' alt="" />
        </div>
        
      </div>
      <div className='div'>
        <div className='p1'>
        <img src={img3}className='img' alt="" />
        </div>
        <div className='p2'>
        <h1>shootings</h1>
        <p>Indian weddings are traditionally multi-day affairs, and involve many intricate ceremonies of sangeet, mehendi, cocktail parties, receptions and the marriage itself, we have the space to ensure that every wedding is a memorable one and each moment is cherished.</p>
        </div>
      </div>
      <div className='div2'>
      <div className='p2'>
        <h1>destination weddings</h1>
        <p>Indian weddings are traditionally multi-day affairs, and involve many intricate ceremonies of sangeet, mehendi, cocktail parties, receptions and the marriage itself, we have the space to ensure that every wedding is a memorable one and each moment is cherished.</p>
        </div>
        <div className='p1'>
        <img src={img4}className='img' alt="" />
        </div>
        
      </div>
      <div className='div'>
        <div className='p1'>
        <img className='img' src={img5} alt="" />
        </div>
        <div className='p2'>
        <h1>gatherings</h1>
        <p>Indian weddings are traditionally multi-day affairs, and involve many intricate ceremonies of sangeet, mehendi, cocktail parties, receptions and the marriage itself, we have the space to ensure that every wedding is a memorable one and each moment is cherished.</p>
        </div>
      </div>
      <div className='div2'>
      <div className='p2'>
        <h1>Event management</h1>
        <p>Indian weddings are traditionally multi-day affairs, and involve many intricate ceremonies of sangeet, mehendi, cocktail parties, receptions and the marriage itself, we have the space to ensure that every wedding is a memorable one and each moment is cherished.</p>
        </div>
        <div className='p1'>
        <img className='img' src={img6} alt="" />
        </div>
        
      </div>

    
    </div>
  )
}

export default ServicesAndFacilities