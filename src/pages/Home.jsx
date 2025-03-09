import React from "react";
import "./Home.css"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <h1>수학 개념테스트</h1>
            <div className="page-container">
                <Link to="/math1"><button className="btn">수학상</button></Link>
                <Link to="/math2"><button className="btn">수학하</button></Link>
                <Link to="/math3"><button className="btn">수학1</button></Link>
                {/* <Link to="/math4"><button className="btn">수학2</button></Link> */}
            </div>
        </div>
    );
}

export default Home;