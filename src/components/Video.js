import React from 'react'
import v1 from '../files/v1.mp4'

function Video() {
  return (
    <div>
     <video  src={v1} style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
    top:0
    }} loop
    autoPlay muted ></video>
    </div>
  )
}

export default Video;