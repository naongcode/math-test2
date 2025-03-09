import React from 'react'
import './Home.css'
import ImageContainer from "../components/ImageContainer"

export default function Math3() {
  const divSettings = [
    { index: 2, divs: [
      { className: 'div1', width: '17px', height: '12px', top: '205px', left: '204px' },
      { className: 'div1', width: '21px', height: '12px', top: '219px', left: '204px' },
    ]},
    { index: 3, divs: [
      { className: 'div1', width: '46px', height: '12px', top: '131px', left: '160px' },
      { className: 'div1', width: '86px', height: '30px', top: '136px', left: '41px' },
      { className: 'div1', width: '94px', height: '12px', top: '174px', left: '158px' },
      { className: 'div1', width: '58px', height: '12px', top: '343px', left: '106px' },
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
