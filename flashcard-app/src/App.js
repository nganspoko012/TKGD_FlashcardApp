import MainContent from './Components/MainContent';
import MainNav from './Components/MainNav';
import SideNav from './Components/SideNav';
import './style.css';

export default function App(){
    return (
        <div className="container">
            <MainNav />
            <SideNav />
            <MainContent />
        </div>
    )
}