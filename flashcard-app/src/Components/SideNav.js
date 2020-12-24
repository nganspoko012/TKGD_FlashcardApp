import '../style.css'
import SideNavItem from './SideNavItem'

export default function SideNav() {
    return (
        <nav className="side-nav">
           <SideNavItem iconName='layers' content='Học phần'/>
           <SideNavItem iconName='layers' content='Học phần'/>
           <SideNavItem iconName='layers' content='Học phần'/>
           <SideNavItem iconName='layers' content='Học phần'/>
           <SideNavItem iconName='layers' content='Học phần'/>
        </nav>
    )
}