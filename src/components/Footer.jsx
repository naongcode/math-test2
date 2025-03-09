import { useState, useEffect } from 'react';
import "./Footer.css"

export default function Footer() {
  const [ad, setAd] = useState(null); // 광고 상태를 관리
  
  useEffect(() => {
    // 광고가 로드되지 않았을 때 광고 예정 문구 표시
    const loadAd = async () => {
      const response = await fetch("/api/ad"); // 광고 API 호출 (실제 광고 API로 대체 필요)
      const adData = await response.json();
      if (adData) {
        setAd(adData); // 광고 데이터가 있으면 상태에 저장
      } else {
        setAd(null); // 광고가 없으면 null
      }
    };

    loadAd(); // 컴포넌트가 마운트될 때 광고 로드

  }, []);

  return (
    <footer className="footer">
      {ad ? (
        <div className="ad-container">
          <img src={ad.imageUrl} alt="Advertisement" className="ad-image" />
          <a href={ad.link} target="_blank" rel="noopener noreferrer">광고 보기</a>
        </div>
      ) : (
        <div className="ad-placeholder">
          광고 예정
        </div>
      )}
    </footer>
  );
}
