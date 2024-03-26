import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import { Stacks } from '../components/Stacks/Stacks';

export default function AllRoutes() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<Stacks/>}/>
            </Routes>
        </BrowserRouter>
    )
}