import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Math1 from "./pages/math1";
import Math2 from "./pages/Math2";
import Math3 from "./pages/Math3";
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
    return (
        <Router basename="/math-test2">
            <MainLayout /> {/* 전체 레이아웃을 감싸는 컴포넌트 */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/math1" element={<Math1 />} />
                <Route path="/math2" element={<Math2 />} />
                <Route path="/math3" element={<Math3 />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

function MainLayout() {
    const location = useLocation(); // 현재 경로 가져오기
    const hideHeaderOnPaths = ["/"]; // 첫 메인 화면에서는 헤더 숨김
  
    return (
      <>
        {!hideHeaderOnPaths.includes(location.pathname) && <Header />}
      </>
    );
}

export default App;