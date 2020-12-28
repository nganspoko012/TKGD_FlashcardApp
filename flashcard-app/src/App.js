import MainContent from './Components/MainContent';
import MainNav from './Components/MainNav';
import SideNav from './Components/SideNav';
import './style.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

export default function App() {

    const [sideNavDisplay, setSideNavDisplay] = useState(true);

    function toggleSiveNav(e){
        e.preventDefault();
        setSideNavDisplay(!sideNavDisplay);
    }

    return (
        <BrowserRouter>
            <div className="container">
                <MainNav menuHandler={toggleSiveNav}/>
                <SideNav display={sideNavDisplay}/>
                <MainContent display={sideNavDisplay}/>
            </div>
        </BrowserRouter>
    )
}