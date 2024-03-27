import Home from '../pages/Home';
import Projects from '../pages/Projects';
import { Header } from '../components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AllRoutes() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    )
}