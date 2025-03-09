import React from 'react'
import './Home.css'
import ImageContainer from "../components/ImageContainer"

export default function Math2() {
  const divSettings = [
    { index: 2, divs: [
      { className: 'div1', width: '112px', height: '39px', top: '106px', left: '15px' },
      { className: 'div2', width: '102px', height: '12px', top: '186px', left: '19px' },
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
