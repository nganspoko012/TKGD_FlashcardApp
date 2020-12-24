import '../style.css'
import MainContent from './MainContent'
import SideNav from './SideNav'

export default function BodyContent() {
    return (
        <div className="container">
            <SideNav/>
            <MainContent/>
        </div>
    )
}