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
    { index: 5, divs: [
      {className: 'div 1', width:'26px', height:'15px', left:'170px', top:'349px'},
      {className: 'div 2', width:'27px', height:'19px', left:'212px', top:'348px'},
      {className: 'div 3', width:'28px', height:'17px', left:'39px', top:'317px'},
      {className: 'div 4', width:'27px', height:'17px', left:'87px', top:'318px'},
    ]},
    { index: 6, divs: [
      {className: 'div 1', width:'22px', height:'15px', left:'179px', top:'144px'},
      {className: 'div 2', width:'23px', height:'14px', left:'179px', top:'161px'},
    ]},
    { index: 7, divs: [
      {className: 'div 1', width:'44px', height:'18px', left:'224px', top:'318px'},
      {className: 'div 2', width:'29px', height:'17px', left:'137px', top:'322px'},
      {className: 'div 3', width:'28px', height:'17px', left:'41px', top:'320px'},
    ]},
    { index: 8, divs: [
      {className: 'div 1', width:'20px', height:'16px', left:'200px', top:'229px'},
      {className: 'div 2', width:'14px', height:'18px', left:'53px', top:'241px'},
      {className: 'div 3', width:'16px', height:'19px', left:'73px', top:'341px'},
      {className: 'div 4', width:'33px', height:'18px', left:'209px', top:'338px'},
    ]},
    { index: 9, divs: [
      {className: 'div 1', width:'52px', height:'16px', left:'151px', top:'229px'},
      {className: 'div 2', width:'52px', height:'16px', left:'151px', top:'248px'},
      {className: 'div 3', width:'82px', height:'19px', left:'141px', top:'315px'},
    ]},
    { index: 10, divs: [
      {className: 'div 1', width:'41px', height:'16px', left:'155px', top:'151px'},
      {className: 'div 2', width:'41px', height:'17px', left:'155px', top:'170px'},
    ]},
    { index: 11, divs: [
      {className: 'div 1', width:'91px', height:'16px', left:'18px', top:'182px'},
      {className: 'div 2', width:'46px', height:'18px', left:'139px', top:'182px'},
      {className: 'div 3', width:'60px', height:'17px', left:'225px', top:'182px'},
    ]},
    { index: 12, divs: [
      {className: 'div 1', width:'105px', height:'35px', left:'17px', top:'200px'},
      {className: 'div 2', width:'36px', height:'15px', left:'146px', top:'326px'},
      {className: 'div 4', width:'13px', height:'15px', left:'128px', top:'342px'},
    ]},
    { index: 13, divs: [
      {className: 'div 1', width:'49px', height:'14px', left:'61px', top:'168px'},
      {className: 'div 2', width:'63px', height:'16px', left:'40px', top:'266px'},
    ]},
    { index: 14, divs: [
      {className: 'div 1', width:'13px', height:'16px', left:'184px', top:'258px'},
      {className: 'div 2', width:'12px', height:'15px', left:'188px', top:'275px'},
      {className: 'div 3', width:'59px', height:'15px', left:'160px', top:'301px'},
      {className: 'div 4', width:'50px', height:'16px', left:'168px', top:'318px'},
    ]},
    { index: 15, divs: [
      {className: 'div 1', width:'27px', height:'14px', left:'62px', top:'157px'},
      {className: 'div 2', width:'17px', height:'15px', left:'45px', top:'185px'},
      {className: 'div 3', width:'15px', height:'15px', left:'82px', top:'186px'},
      {className: 'div 4', width:'144px', height:'15px', left:'126px', top:'268px'},
    ]},
    { index: 16, divs: [
      {className: 'div 1', width:'60px', height:'17px', left:'105px', top:'249px'},
      {className: 'div 2', width:'60px', height:'14px', left:'134px', top:'222px'},
      {className: 'div 3', width:'79px', height:'16px', left:'183px', top:'249px'},
      {className: 'div 4', width:'35px', height:'18px', left:'77px', top:'157px'},
    ]},
    { index: 17, divs: [
      {className: 'div 1', width:'17px', height:'14px', left:'151px', top:'248px'},
      {className: 'div 2', width:'17px', height:'12px', left:'107px', top:'218px'},
      {className: 'div 3', width:'52px', height:'14px', left:'159px', top:'263px'},
      {className: 'div 4', width:'18px', height:'17px', left:'159px', top:'217px'},
      {className: 'div 5', width:'7px', height:'15px', left:'147px', top:'335px'},
      {className: 'div 6', width:'10px', height:'13px', left:'213px', top:'336px'},
      {className: 'div 7', width:'10px', height:'12px', left:'148px', top:'352px'},
      {className: 'div 8', width:'8px', height:'12px', left:'215px', top:'352px'},
    ]},
    { index: 18, divs: [
      {className: 'div 1', width:'17px', height:'14px', left:'189px', top:'310px'},
      {className: 'div 2', width:'63px', height:'14px', left:'175px', top:'326px'},
    ]},
    { index: 19, divs: [
      {className: 'div 1', width:'17px', height:'14px', left:'189px', top:'310px'},
      {className: 'div 2', width:'63px', height:'14px', left:'175px', top:'326px'},
    ]},
    { index: 20, divs: [
      {className: 'div 1', width:'40px', height:'20px', left:'100px', top:'217px'},
      {className: 'div 2', width:'21px', height:'15px', left:'117px', top:'318px'},
    ]},
    { index: 21, divs: [
      {className: 'div 1', width:'16px', height:'16px', left:'143px', top:'146px'},
      {className: 'div 2', width:'16px', height:'15px', left:'149px', top:'164px'},
      {className: 'div 3', width:'19px', height:'16px', left:'175px', top:'314px'},
    ]},
    { index: 22, divs: [
      {className: 'div 1', width:'17px', height:'16px', left:'111px', top:'206px'},
      {className: 'div 2', width:'18px', height:'16px', left:'204px', top:'206px'},
      {className: 'div 3', width:'47px', height:'18px', left:'130px', top:'345px'},
    ]},
    { index: 23, divs: [
      {className: 'div 1', width:'93px', height:'15px', left:'41px', top:'219px'},
      {className: 'div 2', width:'18px', height:'16px', left:'190px', top:'218px'},
      {className: 'div 3', width:'43px', height:'19px', left:'170px', top:'247px'},
    ]},
    { index: 24, divs: [
      {className: 'div 1', width:'26px', height:'15px', left:'52px', top:'162px'},
      {className: 'div 2', width:'18px', height:'16px', left:'97px', top:'161px'},
      {className: 'div 3', width:'24px', height:'16px', left:'85px', top:'239px'},
      {className: 'div 4', width:'70px', height:'14px', left:'23px', top:'274px'},
      {className: 'div 5', width:'83px', height:'32px', left:'194px', top:'323px'},      
    ]},
    { index: 25, divs: [
      {className: 'div 1', width:'54px', height:'16px', left:'162px', top:'170px'},      
    ]},
    { index: 26, divs: [
      {className: 'div 1', width:'34px', height:'17px', left:'188px', top:'189px'},
      {className: 'div 2', width:'31px', height:'16px', left:'64px', top:'191px'},
      {className: 'div 3', width:'30px', height:'17px', left:'91px', top:'249px'},
      {className: 'div 4', width:'48px', height:'18px', left:'138px', top:'249px'},      
    ]},
    { index: 27, divs: [
      {className: 'div 1', width:'48px', height:'18px', left:'145px', top:'127px'},
      {className: 'div 2', width:'38px', height:'18px', left:'67px', top:'127px'},      
    ]},
    { index: 28, divs: [
      {className: 'div 1', width:'69px', height:'15px', left:'27px', top:'301px'},
      {className: 'div 2', width:'44px', height:'17px', left:'40px', top:'164px'},      
    ]},
    { index: 29, divs: [
      {className: 'div 1', width:'21px', height:'15px', left:'181px', top:'314px'},
      {className: 'div 2', width:'29px', height:'16px', left:'163px', top:'343px'},      
    ]},
    { index: 30, divs: [
      {className: 'div 1', width:'29px', height:'17px', left:'66px', top:'299px'},
      {className: 'div 2', width:'45px', height:'14px', left:'96px', top:'316px'},
      {className: 'div 3', width:'40px', height:'15px', left:'73px', top:'332px'},      
    ]},
    { index: 31, divs: [
      {className: 'div 1', width:'26px', height:'15px', left:'44px', top:'162px'},
      {className: 'div 2', width:'16px', height:'15px', left:'90px', top:'163px'},
      {className: 'div 3', width:'14px', height:'15px', left:'77px', top:'280px'},
      {className: 'div 4', width:'20px', height:'16px', left:'101px', top:'295px'},
      {className: 'div 5', width:'42px', height:'14px', left:'100px', top:'312px'},
      {className: 'div 6', width:'17px', height:'13px', left:'134px', top:'328px'},
      {className: 'div 7', width:'40px', height:'20px', left:'89px', top:'342px'},      
    ]},
    { index: 33, divs: [
      {className: 'div 1', width:'76px', height:'31px', left:'201px', top:'162px'},
      {className: 'div 2', width:'46px', height:'26px', left:'88px', top:'326px'},
      {className: 'div 3', width:'25px', height:'25px', left:'225px', top:'298px'},
      {className: 'div 4', width:'26px', height:'24px', left:'224px', top:'325px'},      
    ]},
    { index: 34, divs: [
      {className: 'div 1', width:'81px', height:'15px', left:'106px', top:'272px'},
      {className: 'div 2', width:'67px', height:'15px', left:'141px', top:'325px'},      
    ]},
    { index: 35, divs: [
      {className: 'div 1', width:'81px', height:'15px', left:'70px', top:'206px'},
      {className: 'div 2', width:'78px', height:'15px', left:'64px', top:'223px'},
      {className: 'div 3', width:'47px', height:'13px', left:'72px', top:'239px'},
      {className: 'div 4', width:'16px', height:'24px', left:'76px', top:'254px'},
      {className: 'div 5', width:'118px', height:'15px', left:'72px', top:'297px'},
      {className: 'div 6', width:'32px', height:'13px', left:'65px', top:'282px'},      
    ]},
    { index: 36, divs: [
      {className: 'div 1', width:'81px', height:'15px', left:'74px', top:'217px'},
      {className: 'div 2', width:'78px', height:'15px', left:'68px', top:'234px'},
      {className: 'div 3', width:'47px', height:'13px', left:'74px', top:'250px'},
      {className: 'div 4', width:'106px', height:'26px', left:'78px', top:'264px'},      
    ]},
    { index: 37, divs: [
      {className: 'div 1', width:'27px', height:'15px', left:'50px', top:'232px'},
      {className: 'div 2', width:'24px', height:'15px', left:'47px', top:'261px'},
      {className: 'div 3', width:'33px', height:'14px', left:'45px', top:'303px'},      
    ]},
    { index: 38, divs: [
      {className: 'div 1', width:'80px', height:'17px', left:'162px', top:'225px'},      
    ]},
    { index: 39, divs: [
      {className: 'div 1', width:'80px', height:'17px', left:'106px', top:'274px'},
      {className: 'div 2', width:'41px', height:'15px', left:'88px', top:'293px'},            
    ]},
    { index: 40, divs: [
      {className: 'div 1', width:'74px', height:'15px', left:'63px', top:'208px'},
      {className: 'div 2', width:'71px', height:'15px', left:'62px', top:'239px'},
      {className: 'div 3', width:'68px', height:'16px', left:'62px', top:'281px'},
      {className: 'div 4', width:'68px', height:'14px', left:'62px', top:'310px'},
      {className: 'div 5', width:'50px', height:'17px', left:'100px', top:'355px'},      
    ]},
    { index: 41, divs: [
      {className: 'div 1', width:'26px', height:'12px', left:'84px', top:'216px'},
      {className: 'div 2', width:'31px', height:'13px', left:'76px', top:'231px'},
      {className: 'div 3', width:'32px', height:'16px', left:'85px', top:'246px'},      
    ]},
    { index: 42, divs: [
      {className: 'div 1', width:'80px', height:'17px', left:'24px', top:'275px'},
      {className: 'div 2', width:'63px', height:'17px', left:'173px', top:'274px'},      
    ]},
    { index: 43, divs: [
      {className: 'div 1', width:'108px', height:'31px', left:'26px', top:'224px'},
      {className: 'div 2', width:'92px', height:'17px', left:'179px', top:'232px'},
      {className: 'div 3', width:'70px', height:'28px', left:'181px', top:'301px'},      
    ]},
    { index: 44, divs: [
      {className: 'div 1', width:'108px', height:'31px', left:'26px', top:'224px'},
      {className: 'div 2', width:'19px', height:'29px', left:'196px', top:'221px'},
      {className: 'div 3', width:'41px', height:'30px', left:'225px', top:'221px'},
      {className: 'div 4', width:'35px', height:'13px', left:'128px', top:'320px'},
      {className: 'div 5', width:'27px', height:'13px', left:'128px', top:'336px'},
      {className: 'div 6', width:'58px', height:'16px', left:'128px', top:'350px'},      
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
