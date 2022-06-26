import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./parts/home/Home";
import HowToPlay from "./parts/how_to_play/HowToPlay";
import Navbar from "./parts/navbar/Navbar";

function App() {

    const [currentPage, setCurrentPage] = useState(0);

    return (
        <BrowserRouter>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/how-to-play" element={<HowToPlay />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
