import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./parts/home/Home";
import Team from "./parts/team/Team";
import HowToPlay from "./parts/how_to_play/HowToPlay";
import Navbar from "./parts/navbar/Navbar";
import DarkTheme from './theme/Theme';
import { ThemeProvider } from 'styled-components';
import Footer from "./parts/footer/Footer";
import Litepaper from "./parts/litepaper/Litepaper";
import NewsLetter from "./parts/newsletter/Newsletter";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


function App() {

    const path = window.location.pathname
    const [currentPage, setCurrentPage] = useState(path);

    useEffect(() => {
        setCurrentPage(path)
    }, [])

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/how-to-play" element={<HowToPlay />} />
                <Route path="/litepaper" element={<Litepaper />} />
                <Route path="/team" element={<Team />} />
            </Routes>
            <NewsLetter />
            <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </BrowserRouter>
    );
}

export default App;
