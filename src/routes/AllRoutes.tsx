import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer'
import { Mouse } from '../components/Mouse/Mouse';
import { NotFound } from '../pages/NotFound';

export default function AllRoutes() {
    const refMouse = React.useRef(null);

    return (
        <div className='h-full' ref={refMouse}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
                <Mouse refMouse={refMouse} />
            </BrowserRouter>
        </div>
    )
}