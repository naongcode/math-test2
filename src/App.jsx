import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Math1 from "./pages/math1";
import Math2 from "./pages/Math2";
import Math3 from "./pages/Math3";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/math1" element={<Math1 />} />
                <Route path="/math2" element={<Math2 />} />
                <Route path="/math3" element={<Math3 />} />
            </Routes>
        </Router>
    );
}

export default App;