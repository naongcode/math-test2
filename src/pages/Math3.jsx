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
    { index: 4, divs: [
      { className: 'div 1', width:'7px', height:'21px', left:'187px', top:'163px' },
      { className: 'div 2', width:'17px', height:'14px', left:'127px', top:'196px' },
    ]},
    { index: 5, divs: [
      {className: 'div 1', width:'20px', height:'16px', left:'185px', top:'171px'},
      {className: 'div 2', width:'26px', height:'18px', left:'199px', top:'204px'},
      {className: 'div 3', width:'22px', height:'17px', left:'185px', top:'261px'},
      {className: 'div 4', width:'56px', height:'46px', left:'191px', top:'280px'},
    ]},
    { index: 6, divs: [
      {className: 'div 1', width:'20px', height:'16px', left:'82px', top:'176px'},
      {className: 'div 2', width:'27px', height:'30px', left:'71px', top:'196px'},
      {className: 'div 3', width:'26px', height:'17px', left:'108px', top:'233px'},
      {className: 'div 4', width:'22px', height:'18px', left:'74px', top:'233px'},
      {className: 'div 5', width:'22px', height:'31px', left:'83px', top:'299px'},
      {className: 'div 6', width:'31px', height:'20px', left:'75px', top:'254px'},
    ]},
    { index: 7, divs: [
      {className: 'div 1', width:'27px', height:'22px', left:'159px', top:'256px'},
      {className: 'div 2', width:'27px', height:'24px', left:'192px', top:'256px'},
      {className: 'div 3', width:'27px', height:'24px', left:'225px', top:'256px'},
    ]},
    { index: 8, divs: [
      {className: 'div 1', width:'8px', height:'14px', left:'60px', top:'178px'},
      {className: 'div 2', width:'9px', height:'17px', left:'100px', top:'177px'},
      {className: 'div 3', width:'61px', height:'13px', left:'88px', top:'195px'},
      {className: 'div 4', width:'60px', height:'15px', left:'67px', top:'214px'},
      {className: 'div 5', width:'31px', height:'13px', left:'69px', top:'236px'},
    ]},
    { index: 9, divs: [
      {className: 'div 1', width:'32px', height:'34px', left:'88px', top:'155px'},
      {className: 'div 2', width:'33px', height:'28px', left:'85px', top:'192px'},
      {className: 'div 3', width:'24px', height:'17px', left:'102px', top:'266px'},
      {className: 'div 4', width:'23px', height:'20px', left:'67px', top:'297px'},
    ]},
    { index: 10, divs: [
      {className: 'div 1', width:'19px', height:'12px', left:'198px', top:'310px'},
      {className: 'div 2', width:'20px', height:'14px', left:'203px', top:'325px'},
      {className: 'div 3', width:'13px', height:'14px', left:'106px', top:'337px'},
      {className: 'div 4', width:'15px', height:'12px', left:'157px', top:'353px'},
    ]},
    { index: 11, divs: [
      {className: 'div 1', width:'21px', height:'13px', left:'197px', top:'247px'},
      {className: 'div 2', width:'20px', height:'14px', left:'203px', top:'263px'},
      {className: 'div 3', width:'13px', height:'14px', left:'106px', top:'275px'},
      {className: 'div 4', width:'13px', height:'12px', left:'167px', top:'290px'},
    ]},
    { index: 12, divs: [
      {className: 'div 1', width:'44px', height:'14px', left:'184px', top:'291px'},
    ]},
    { index: 13, divs: [
      {className: 'div 1', width:'68px', height:'18px', left:'163px', top:'195px'},
    ]},
    { index: 14, divs: [
      {className: 'div 1', width:'118px', height:'30px', left:'37px', top:'245px'},
    ]},
    { index: 15, divs: [
      {className: 'div 1', width:'42px', height:'17px', left:'70px', top:'176px'},
    ]},
    { index: 16, divs: [
      {className: 'div 1', width:'20px', height:'16px', left:'193px', top:'140px'},
      {className: 'div 2', width:'54px', height:'27px', left:'196px', top:'170px'},
      {className: 'div 3', width:'115px', height:'15px', left:'130px', top:'239px'},
      {className: 'div 4', width:'123px', height:'17px', left:'127px', top:'317px'},
    ]},
    { index: 17, divs: [
      {className: 'div 1', width:'17px', height:'26px', left:'99px', top:'311px'},
      {className: 'div 2', width:'19px', height:'27px', left:'158px', top:'312px'},
      {className: 'div 3', width:'23px', height:'29px', left:'216px', top:'311px'},
    ]},
    { index: 18, divs: [
      {className: 'div 1', width:'25px', height:'29px', left:'102px', top:'322px'},
      {className: 'div 2', width:'19px', height:'27px', left:'222px', top:'324px'},
    ]},
    { index: 20, divs: [
      {className: 'div 1', width:'39px', height:'15px', left:'214px', top:'286px'},
      {className: 'div 2', width:'45px', height:'15px', left:'208px', top:'303px'},
      {className: 'div 3', width:'35px', height:'16px', left:'214px', top:'320px'},
      {className: 'div 4', width:'26px', height:'15px', left:'220px', top:'337px'},
    ]},
    { index: 21, divs: [
      {className: 'div 1', width:'39px', height:'15px', left:'214px', top:'286px'},
      {className: 'div 2', width:'45px', height:'15px', left:'208px', top:'303px'},
      {className: 'div 3', width:'35px', height:'16px', left:'214px', top:'320px'},
      {className: 'div 4', width:'26px', height:'15px', left:'220px', top:'337px'},
    ]},
    { index: 22, divs: [
      {className: 'div 1', width:'55px', height:'16px', left:'185px', top:'290px'},
      {className: 'div 2', width:'45px', height:'15px', left:'208px', top:'307px'},
      {className: 'div 3', width:'35px', height:'16px', left:'212px', top:'323px'},
      {className: 'div 4', width:'26px', height:'15px', left:'219px', top:'340px'},
    ]},
    { index: 23, divs: [
      {className: 'div 1', width:'15px', height:'15px', left:'92px', top:'310px'},
      {className: 'div 2', width:'15px', height:'17px', left:'94px', top:'325px'},
      {className: 'div 3', width:'23px', height:'15px', left:'210px', top:'309px'},
      {className: 'div 4', width:'9px', height:'15px', left:'217px', top:'325px'},
    ]},
    { index: 24, divs: [
      {className: 'div 1', width:'39px', height:'15px', left:'102px', top:'206px'},
      {className: 'div 2', width:'18px', height:'15px', left:'146px', top:'221px'},
      {className: 'div 3', width:'49px', height:'16px', left:'55px', top:'236px'},
      {className: 'div 4', width:'18px', height:'14px', left:'84px', top:'254px'},
      {className: 'div 5', width:'13px', height:'15px', left:'151px', top:'253px'},
      {className: 'div 6', width:'27px', height:'14px', left:'210px', top:'253px'}
    ]},
    { index: 25, divs: [
      {className: 'div 1', width:'117px', height:'21px', left:'24px', top:'239px'},
      {className: 'div 2', width:'94px', height:'13px', left:'20px', top:'326px'},
      {className: 'div 3', width:'93px', height:'43px', left:'176px', top:'219px'},
    ]},
    { index: 26, divs: [
      {className: 'div 1', width:'54px', height:'29px', left:'69px', top:'165px'},
      {className: 'div 2', width:'59px', height:'24px', left:'64px', top:'227px'},
      {className: 'div 3', width:'104px', height:'19px', left:'47px', top:'289px'},
      {className: 'div 4', width:'63px', height:'26px', left:'67px', top:'316px'},
      {className: 'div 5', width:'39px', height:'23px', left:'205px', top:'212px'},
      {className: 'div 6', width:'43px', height:'24px', left:'201px', top:'328px'},
    ]},

    { index: 28, divs: [
      {className: 'div 1', width:'7px', height:'14px', left:'115px', top:'220px'},
      {className: 'div 2', width:'12px', height:'14px', left:'93px', top:'236px'},
    ]},
    { index: 29, divs: [
      {className: 'div 1', width:'45px', height:'16px', left:'227px', top:'268px'},
      {className: 'div 2', width:'49px', height:'14px', left:'138px', top:'296px'},
    ]},
    { index: 30, divs: [
      {className: 'div 1', width:'35px', height:'16px', left:'139px', top:'174px'},
      {className: 'div 2', width:'37px', height:'16px', left:'111px', top:'192px'},
      {className: 'div 3', width:'44px', height:'27px', left:'179px', top:'282px'},
      {className: 'div 4', width:'74px', height:'28px', left:'181px', top:'323px'},
    ]},
    { index: 31, divs: [
      {className: 'div 1', width:'35px', height:'16px', left:'224px', top:'268px'},
      {className: 'div 2', width:'37px', height:'16px', left:'145px', top:'294px'},
      
    ]},
    { index: 32, divs: [
      {className: 'div 1', width:'35px', height:'16px', left:'138px', top:'173px'},
      {className: 'div 2', width:'37px', height:'16px', left:'110px', top:'191px'},
      {className: 'div 3', width:'53px', height:'32px', left:'132px', top:'282px'},
      {className: 'div 4', width:'51px', height:'31px', left:'231px', top:'281px'},
      {className: 'div 5', width:'31px', height:'24px', left:'132px', top:'322px'},
    ]},
    { index: 33, divs: [
      {className: 'div 1', width:'71px', height:'17px', left:'83px', top:'260px'},
      {className: 'div 2', width:'32px', height:'29px', left:'176px', top:'324px'},
    ]},
    { index: 34, divs: [
      {className: 'div 1', width:'58px', height:'25px', left:'149px', top:'155px'},
      {className: 'div 2', width:'58px', height:'25px', left:'149px', top:'183px'},
      {className: 'div 3', width:'32px', height:'31px', left:'107px', top:'270px'},
      {className: 'div 4', width:'29px', height:'19px', left:'97px', top:'307px'},
    ]},
    { index: 35, divs: [
      {className: 'div 1', width:'34px', height:'26px', left:'164px', top:'155px'},
      {className: 'div 2', width:'62px', height:'25px', left:'182px', top:'184px'},
      {className: 'div 3', width:'52px', height:'28px', left:'180px', top:'211px'},
      {className: 'div 4', width:'54px', height:'22px', left:'198px', top:'269px'},
      {className: 'div 5', width:'75px', height:'22px', left:'207px', top:'294px'},
      {className: 'div 6', width:'87px', height:'23px', left:'125px', top:'318px'},
    ]},
    { index: 36, divs: [
      {className: 'div 1', width:'24px', height:'13px', left:'138px', top:'307px'},
    ]},
    { index: 37, divs: [
      {className: 'div 1', width:'29px', height:'13px', left:'188px', top:'193px'},
      {className: 'div 2', width:'57px', height:'16px', left:'162px', top:'168px'},
      {className: 'div 3', width:'56px', height:'16px', left:'157px', top:'266px'},
      {className: 'div 4', width:'29px', height:'14px', left:'181px', top:'291px'},
    ]},
    { index: 38, divs: [
      {className: 'div 1', width:'16px', height:'16px', left:'57px', top:'250px'},
      {className: 'div 2', width:'18px', height:'13px', left:'57px', top:'268px'},
      {className: 'div 3', width:'17px', height:'12px', left:'162px', top:'267px'},
      {className: 'div 4', width:'25px', height:'13px', left:'195px', top:'267px'},
      {className: 'div 5', width:'15px', height:'11px', left:'84px', top:'282px'},
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
