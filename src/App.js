import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./parts/home/Home";
import HowToPlay from "./parts/how_to_play/HowToPlay";
import Navbar from "./parts/navbar/Navbar";
import DarkTheme from './theme/Theme';
import { ThemeProvider } from 'styled-components';
import Footer from "./parts/footer/Footer";

function App() {

    const path = window.location.pathname
    const [currentPage, setCurrentPage] = useState(path);

    useEffect(() => {
        setCurrentPage(path)
    }, [])

    return (
        <BrowserRouter>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/how-to-play" element={<HowToPlay />} />
            </Routes>
            <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </BrowserRouter>
    );
}

export default App;
