import React from 'react'
import './Home.css'
import ImageContainer from "../components/ImageContainer"

export default function Math2() {
  const divSettings = [
    { index: 2, divs: [
      { className: 'div1', width: '112px', height: '39px', top: '216px', left: '196px' },
      { className: 'div2', width: '102px', height: '12px', top: '297px', left: '200px' },
    ]},
    { index: 3, divs: [
      { className: 'div1', width: '250px', height: '200px', top: '60px', left: '100px' },
    ]},
  ];
  
  return (
    <div>
      <div className='img-container'>
        <ImageContainer 
          length={45} 
          imagePath="/math-test2/assets/math1-2" 
          divSettings={divSettings} />

      </div>
    </div>
  )
}
