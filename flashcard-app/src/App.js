import MainContent from './Components/MainContent';
import MainNav from './Components/MainNav';
import SideNav from './Components/SideNav';
import './style.css';
import { BrowserRouter } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <MainNav />
                <SideNav />
                <MainContent />
            </div>
        </BrowserRouter>
    )
}