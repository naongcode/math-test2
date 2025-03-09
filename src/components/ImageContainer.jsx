import React, { useState, useRef, useEffect } from 'react'
import "./ImageContainer.css"

export default function ImageContainer({ length, imagePath, divSettings }) {
  // 이미지 저장소
  // const images = Object.entries(import.meta.glob("/src/assets/math2-1/*.png", { eager: true }))
  // .map(([path, module]) => module.default)
  // .sort();

  const images = Array.from({ length }, (_, index) => {
    return `${imagePath}/${String(index + 1).padStart(3, '0')}.png`;
  });

  const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0); //인덱스관리
    const [inputValue, setInputValue] = useState(currentIndex + 1); // 페이지 표시

    // currentIndex가 변경될 때마다 inputValue를 업데이트
    useEffect(() => {
      setInputValue(currentIndex + 1); // currentIndex + 1로 업데이트
    }, [currentIndex]);

    const startX = useRef(0); // 터치 시작위치
    const isTouching = useRef(false); // 터치가 진행중인지
    
    // 각 div의 상태를 관리
    const [activeIndex, setActiveIndex] = useState(false);

    // div 클릭 시 해당 div의 className을 변경
    const handleClick = (index) => {
      // 클릭된 div의 index를 저장 (기존 클릭된 div의 index와 동일한 경우 '비활성화')
      setActiveIndex((prevStates) => ({
        ...prevStates,
        [index]: !prevStates[index],  // 해당 div의 active 상태 반전
      }));
    };

    const [isActiveAll, setIsActiveAll] = useState(false);

    // div 모두 활성화 / 비활성화 
    const activateAll = () => {
      const allActive = {};
      divSettings.find(item => item.index === currentIndex)?.divs.forEach((_, idx) => {
        allActive[idx] = true;
      });
      setActiveIndex({}); setIsActiveAll(true);}
    const deactivateAll = () => {setActiveIndex({}); setIsActiveAll(false);}

    // div 설정에 맞는 스타일을 동적으로 생성
    const getDivsForCurrentImage = () => {
      const currentDivs = divSettings.find(item => item.index === currentIndex)?.divs || [];
      return currentDivs.map((div, idx) => (
        <div
          key={idx}
          className={`slider-div ${div.className} ${activeIndex[idx] || isActiveAll ? 'active' : ''}`}
          onClick={() => handleClick(idx)}
          style={{
            width: div.width,
            height: div.height,
            top: div.top,
            left: div.left,
          }}
        >
          {/* 필요한 경우 div 안에 다른 내용 추가 */}
        </div>
      ));
    };

    // 터치
    const handleTouchStart = (e) => {
      startX.current = e.touches[0].clientX;  // 터치 시작위치
      isTouching.current = true;  // 터치 진행중
    }

    // 터치 이동
    const handleTouchMove = (e) => {
      if (!isTouching.current) return;

      const moveX = e.touches[0].clientX - startX.current; // 터치 이동거리
      const slider = document.querySelector('.slider');
      slider.style.transform = `translateX(${(currentIndex * -100) + (moveX / window.innerWidth * 100)}%)`
    }

    const handleTouchEnd = (e) => {
      if (!isTouching.current) return;

      const moveX = e.changedTouches[0].clientX - startX.current;
      if (moveX > 50) {
        prevSlide();
      } else if (moveX < -50) {
        nextSlide();
      } else {
        resetSlide();
      }
      isTouching.current = false;
    }

    // 처음으로
    const startSlide = () => {
      setCurrentIndex(0)
    }

    // 마지막으로
    const endSlide = () => {
      setCurrentIndex(images.length - 1)
    }

    // 이전으로
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1))
    }

    // 다음으로
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? images.length - 1 : prevIndex + 1));
    };

    // 리셋하기
    const resetSlide = () => {
      const slider = document.querySelector('.slider');
      slider.style.transition = "transform 0.3s ease-in-out";
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // 페이지 번호 입력 처리
    const handlePageInputChange = (e) => {
      const value = e.target.value;
      if (value > 0 && value <= images.length) {
        setInputValue(value);
      }
    };
    const handlePageSubmit = (e) => {
      if (e.key === 'Enter') {
        setCurrentIndex(inputValue - 1); // 입력한 페이지로 이동
      }
    };

    return (
      <div className="slider-container">
        
        <div className='button-container'>
          <button 
            className='upper-button' 
            onClick={activateAll}>학습모드<br/>(모두 보이기)</button>
          <button 
            className='upper-button'
            onClick={deactivateAll}>테스트모드<br/>(모두 가리기)</button>
        </div>

        {/* 이미지 번호에 맞는 여러 div들 렌더링 */}
        <div className="overlay">
          {getDivsForCurrentImage()}
        </div>

        <div
          className="slider-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* 이미지 */}
          <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide} alt={`slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="button-container">
          <button className="prev-button" onClick={startSlide}>{"<<"}</button>
          <button className="prev-button" onClick={prevSlide}>{"<"}</button>

          <div className="page-info">
            <input
              type="number"
              value={inputValue}
              onChange={handlePageInputChange}
              onKeyDown={handlePageSubmit}
              min={1}
              max={images.length}
            />
            <span> / {images.length}</span>
          </div>

          {/* 다음 버튼 */}
          <button className="next-button" onClick={nextSlide}>{">"}</button>
          <button className="next-button" onClick={endSlide}>{">>"}</button>
        </div>

      </div>
    )
  };

  return <Slider />;
}