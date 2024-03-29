import Home from '../pages/Home';
import Projects from '../pages/Projects';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Mouse } from '../components/Mouse/Mouse';

export default function AllRoutes() {
    const refMouse = React.useRef(null);

    return (
        <div className='h-screen' ref={refMouse}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
                <Mouse refMouse={refMouse} />
            </BrowserRouter>
        </div>
    )
}