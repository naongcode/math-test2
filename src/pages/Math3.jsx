import React from 'react'
import './Home.css'
import ImageContainer from "../components/ImageContainer"

export default function Math3() {
  const divSettings = [
    { index: 2, divs: [
      { className: 'div1', width: '200px', height: '150px', top: '50px', left: '50px' },
      { className: 'div2', width: '100px', height: '100px', top: '100px', left: '200px' },
    ]},
    { index: 3, divs: [
      { className: 'div1', width: '250px', height: '200px', top: '60px', left: '100px' },
    ]},
  ];
  
  return (
    <div>
      <div className='img-container'>
        <ImageContainer 
          length={40} 
          imagePath="/math-test2/assets/math2-1" 
          divSettings={divSettings} />

      </div>
    </div>
  )
}
