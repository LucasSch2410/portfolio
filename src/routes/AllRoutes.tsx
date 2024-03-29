import Home from '../pages/Home';
import Projects from '../pages/Projects';
import { Header } from '../components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Mouse } from '../components/Mouse/Mouse';

export default function AllRoutes() {
    const refMouse = React.useRef(null);

    return (
        <BrowserRouter>
            <div className='h-screen' ref={refMouse}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<Projects />} />
                </Routes>
                <Mouse refMouse={refMouse}/>
            </div>
        </BrowserRouter>
    )
}