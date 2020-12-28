import '../style.css'
import SideNavItem from './SideNavItem'
import UserInfo from './UserInfo/UserInfo'
import { Link } from 'react-router-dom'

const userInfo = {
    email: "nganspoko012@gmail.com",
    displayName: "Ngân Võ"
};

export default function SideNav({ display }) {
    return (
        <nav className={display == true ? "side-nav" : "unactive"}>
            <UserInfo user={userInfo} />
            <Link to='/courses'><SideNavItem iconName='layers' content='Học phần' /></Link>
            <Link to='/templates'><SideNavItem iconName='receipt' content='Template' /></Link>
            <Link to='/statistic'><SideNavItem iconName='insert_chart_outlined' content='Thống kê' /></Link>
            <Link to='/options'><SideNavItem iconName='settings' content='Tùy chỉnh' /></Link>
            <Link to='/logout'><SideNavItem iconName='exit_to_app' content='Đăng xuất' /></Link>
        </nav>
    )
}