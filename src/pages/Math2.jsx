import React from 'react'
import './Home.css'
import ImageContainer from "../components/ImageContainer"

export default function Math2() {
  const divSettings = [
    { index: 2, divs: [
      { className: 'div1', width: '112px', height: '39px', top: '193px', left: '15px' },
      { className: 'div2', width: '102px', height: '12px', top: '274px', left: '19px' },
    ]},
    { index: 3, divs: [
      { className: 'div1', width: '41px', height: '12px', top: '196px', left: '99px' },
      { className: 'div2', width: '66px', height: '12px', top: '196px', left: '188px' },
    ]},
    { index: 4, divs: [
      { className: 'div1', width: '38px', height: '12px', top: '264px', left: '91px' },
      { className: 'div2', width: '11px', height: '12px', top: '320px', left: '93px' },
      { className: 'div2', width: '9px', height: '12px', top: '333px', left: '104px' },
      { className: 'div2', width: '11px', height: '12px', top: '347px', left: '102px' },
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
